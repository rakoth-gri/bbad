import characterSliceReducer from "./charactersSlice/charactersSlice";
import episodesSliceReducer from "./episodesSlice/episodesSlice";
import favouriteSliceReducer from "./favouriteSlice/favouriteSlice";
import menuSliceReducer from "./menuSlice/menuSlice";
import authSliceReducer from "./authSlice/authSlice";

export const rootReducer = {
    characterSliceReducer,
    episodesSliceReducer,
    favouriteSliceReducer,
    menuSliceReducer,
    authSliceReducer,
};