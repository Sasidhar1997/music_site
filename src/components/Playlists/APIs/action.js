

export default function Playlists () {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json()).then(json => {
            dispatch({
                type: "PLAYLISTS",
                apiResponse: json,
            });
            return json;
        }).catch((error) => {
            console.log("Got Error with Playlists " + error)
        });
    }
};