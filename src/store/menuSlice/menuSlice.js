import { createSlice} from "@reduxjs/toolkit";


const initialState = {
	menuVisiable: false,
};

export const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setMenuVisiable (state) {
           state.menuVisiable = true 
        },
        setMenuInvisiable (state) {
            state.menuVisiable = false
        },
	},
	extraReducers: {},
});

// Action creators are generated for each case reducer function:
export const { setMenuVisiable, setMenuInvisiable } = menuSlice.actions;

export default menuSlice.reducer;