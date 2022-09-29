import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServerConnection } from "../../services/serverConnection";

// экспортируем, так как функцию будем диспатчить
export const fetchingCharacters = createAsyncThunk("characters/fetchingCharacters", async ({offset, search}) => {
	let data = await ServerConnection.fetchingChars(offset, search);
	if (!data) {
		console.log("Ошибка при запросе на сервер((!");
		return;
	}
	return data;
});

const initialState = {
	characters: [],
	status: false,
	error: "",
	offset: 0,
	search: "",
};

export const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		// loadAllCharacters(state, action) {
		// 	state.characters = action.payload;
		// },
		setOffset(state, action) {
			state.offset = action.payload;
		},
		setOffsetPlus(state) {
			state.offset = state.offset + 1;
		},
		setOffsetMinus(state) {
			state.offset = state.offset - 1;
		},
		setSearch(state, action) {
			state.search = action.payload;
		},
	},
	extraReducers: {
		[fetchingCharacters.pending]: (state) => {
			state.status = true;
			state.error = "";
		},
		[fetchingCharacters.fulfilled]: (state, action) => {
			state.status = false;
			state.characters = action.payload;
		},
		[fetchingCharacters.rejected]: (state, action) => {},
	},
});

// Action creators are generated for each case reducer function:
export const { loadAllCharacters, setOffset, setOffsetPlus, setOffsetMinus, setSearch } = charactersSlice.actions;

export default charactersSlice.reducer;
