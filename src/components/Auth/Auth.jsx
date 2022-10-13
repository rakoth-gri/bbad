import React, { memo, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Auth.module.css";

// хуки
import { useSelector, useDispatch } from "react-redux/es/exports";

// экшены authSlice
import { setAuth, setUser } from "../../store/authSlice/authSlice";

// сервисы
import { setToLS } from "../../services/ls";

// константы
import { authKey } from "../../constants/constants";

const Auth = memo(() => {
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.authSliceReducer.auth);
	const login = useSelector((state) => state.authSliceReducer.user);

	useEffect(() => {
		setToLS(authKey, { auth, login });
	}, [auth, login]);

	const logout = useCallback(() => {
		dispatch(setAuth());
		dispatch(setUser(""));
	}, []);

	return (
		<div className={styles.auth}>
			{auth ? (
				<button className={`btn btn-danger ${styles.logInControls}`} to="/" onClick={logout}>
					{" "}
					LOG OUT{" "}
				</button>
			) : (
				<NavLink className={`btn btn-success ${styles.logInControls}`} to="/login">
					{" "}
					LOG IN{" "}
				</NavLink>
			)}
			<span className={styles.user}> {login ? login : "Авторизуйтесь"} </span>
		</div>
	);
});

export default Auth;
