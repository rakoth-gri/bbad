import { configureStore } from "@reduxjs/toolkit";

// импортируем объект с редьюсерами
import { rootReducer } from "./reducers";

const reducers = {reducer: rootReducer}

export const store = configureStore(reducers)