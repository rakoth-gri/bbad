import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ServerConnection } from "../../services/serverConnection";

// экспортируем, так как функцию будем диспатчить
export const fetchingEpisodes = createAsyncThunk("episodes/fetchingEpisodes", async () => {
	let data = await ServerConnection.fetchingEpisodes();
	if (!data) 
		return
	return data;
});

const initialState = {
	episodes: [],
	status: false,
	error: "",
	sortParams: {value: "", text: "не выбрано"},
	popup: false,
};

export const episodesSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		openPopup(state) {
			state.popup = true;
		},
		closePopup(state) {
			state.popup = false;
		},
        changeSort(state, action) {
			state.sortParams = action.payload;
		},
	},
	extraReducers: {
		[fetchingEpisodes.pending]: (state) => {
			state.status = true;
			state.error = "";
		},
		[fetchingEpisodes.fulfilled]: (state, action) => {
			state.status = false;
			state.episodes = action.payload;
		},
		[fetchingEpisodes.rejected]: (state, action) => {},
	},
});

// Action creators are generated for each case reducer function:
export const { openPopup, closePopup, changeSort } = episodesSlice.actions;

export default episodesSlice.reducer;
