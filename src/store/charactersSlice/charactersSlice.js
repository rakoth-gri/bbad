import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServerConnection } from "../../services/serverConnection";

// экспортируем, так как функцию будем диспатчить
export const fetchingCharacters = createAsyncThunk("characters/fetchingCharacters", async ({ offset, search }) => {
	let data = await ServerConnection.fetchingChars(offset, search);
	if (!data) {
		console.log("Ошибка при запросе на сервер((!");
		return;
	}
	return data;
});

export const fetchingCharacter = createAsyncThunk(
	"characters/fetchingCharacter",
	async (id, { rejectWithValue, dispatch }) => {
		let data = await ServerConnection.fetchingChar(id);
		if (!data) {
			rejectWithValue("произошла ошибка запроса");
		}
		dispatch(setCharacter(...data));
	}
);

const initialState = {
	characters: [],
	character: null,
	status: false,
	error: "",
	offset: 0,
	search: "",
};

export const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
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
		setCharacter(state, action) {
			state.status = false;
			state.character = action.payload;
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
		[fetchingCharacters.rejected]: (state, action) => {
			console.log(action.payload);
		},

		[fetchingCharacter.pending]: (state) => {
			state.status = true;
			state.error = "";
		},
		[fetchingCharacter.rejected]: (state, action) => {
			
		},
	},
});

// Action creators are generated for each case reducer function:
export const { setOffset, setOffsetPlus, setOffsetMinus, setSearch, setCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
