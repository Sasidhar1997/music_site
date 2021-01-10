let state1 = {
    
}

export default function playlistsReducer (state = state1, action) {
    switch (action.type) {
        case "PLAYLISTS":
            return {
                ...state,
                PLAYLISTS: action.apiResponse
            };

        default:
            return state;
    }
};