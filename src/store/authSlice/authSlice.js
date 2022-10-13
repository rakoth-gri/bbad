import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Сервисинг
import { getFromLS } from "../../services/ls";
// контанты LS
import { authKey } from "../../constants/constants";

export const checkingAuthUser = createAsyncThunk(
	"auth/checkingAuthUser",
	async function ({ login, password }, { dispatch }) {
		try {
			let res = await fetch("./mockData/auth.json", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (!res.ok) throw new Error();

			res = await res.json();

			let checkingAuth = res.find((i) => i.login === login && i.password === password);

			if (!checkingAuth) {
				dispatch(setError("Неверный логин или пароль!"));
				return;
			}
			dispatch(setAuth());
            dispatch(setUser(checkingAuth.login));
		} catch (error) {
			alert("ПРОИЗОШЛА ОШИБКА");
		}
	}
);

const initialState = {
	auth: getFromLS(authKey).auth,
	error: "",
    user: getFromLS(authKey).login,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setAuth(state) {
			state.auth = !state.auth;
			state.error = "";            
		},
		setError(state, action) {
			state.error = action.payload;
		},
        setUser(state,action) {
            state.user = action.payload;
        }
	},
});

export const { setAuth, setError, setUser } = authSlice.actions;

export default authSlice.reducer;
