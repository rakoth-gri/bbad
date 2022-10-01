import { configureStore } from "@reduxjs/toolkit";

// импортируем объект с редюсерами
import { rootReducer } from "./reducers";

// сервисы
import { setToLS } from "../services/ls";

// константы
import { favourites } from "./../constants/constants";

export const store = configureStore({ reducer: rootReducer });

// подписываемся на изменения в сторе по избранным персонам
store.subscribe(() => {
	let data = store.getState().favouriteSliceReducer.favouriteChars;
	setToLS(favourites, data);
});
