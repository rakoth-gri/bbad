import React, {useEffect, useState, memo } from "react";

import styles from "./LogIn.module.css";

// хуки
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

// экшен createAsyncFunc **********
import { checkingAuthUser } from "../../store/authSlice/authSlice";

const LogIn = memo(() => {
	
	const [authUser, setAuthUser] = useState({ login: "", password: "" });

	const location = useNavigate();

	const dispatch = useDispatch();

	const error = useSelector((state) => state.authSliceReducer.error);

		
	const formHandler = (e) => {
		e.preventDefault();
		for (let key in authUser) {
			if (!authUser[key]) return;
		}
		dispatch(checkingAuthUser(authUser));
		setAuthUser({ login: "", password: "" });
	};

	return (
		<section className={`${styles.logIn}`}>
			<form action="" className={`${styles.formLogIn}`} onSubmit={formHandler}>
				<div className={`${styles.formWrapper} py-3`}>
					<label htmlFor="login" className="form-label">
						Login
					</label>
					<input
						type="text"
						id="login"
						className={`form-control ${styles.inputLogInModify}`}
						placeholder="Login"						
						value={authUser.login}
						onChange={(e) => setAuthUser({ ...authUser, login: e.target.value })}
					/>
				</div>
				<div className={`${styles.formWrapper} py-3`}>
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						id="password"
						className={`form-control ${styles.inputLogInModify}`}
						placeholder="Password"
						value={authUser.password}
						onChange={(e) => setAuthUser({ ...authUser, password: e.target.value })}
					/>
				</div>
				{error ? <span className={styles.error}> {error} </span> : null}
				<button className={`${styles.btnLogInModify} btn btn-success mt-3`}>Log In</button>
			</form>
		</section>
	);
});

export default LogIn;
