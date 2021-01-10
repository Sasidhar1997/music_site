  
import { combineReducers } from "redux";
import songsReducer from "../components/Songs/APIs/reducer";
import playlistsReducer from "../components/Playlists/APIs/reducer"

const rootReducer = combineReducers({
    songs: songsReducer,
    playlists: playlistsReducer
});

export default rootReducer;