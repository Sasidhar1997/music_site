let state1 = {
    
}

export default function songsReducer (state = state1, action) {
    switch (action.type) {
        case "SONGS":
            return {
                ...state,
                SONGS: action.apiResponse
            };

        default:
            return state;
    }
};