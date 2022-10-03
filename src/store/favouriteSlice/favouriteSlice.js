import { createSlice} from "@reduxjs/toolkit";

// Сервисинг
import { getFromLS } from "../../services/ls";

// константы
import { favourites } from "../../constants/constants";

const initialState = {
	favouriteChars: getFromLS(favourites),
};

export const favouriteSlice = createSlice({
	name: "favourite",
	initialState,
	reducers: {
		toFavourite(state, { payload }) {
			if (state.favouriteChars.find((fav) => fav.char_id === payload.char_id)) {
				state.favouriteChars = state.favouriteChars.filter((fav) => fav.char_id !== payload.char_id);
				return;
			}
			state.favouriteChars.push(payload);
			// state.favouriteChars = [...state.favouriteChars, payload];
		},
	},
	extraReducers: {},
});

// Action creators are generated for each case reducer function:
export const { toFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
