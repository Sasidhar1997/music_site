


export default function Songs () {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/albums').then(response => response.json()).then(json => {
            dispatch({
                type: "SONGS",
                apiResponse: json,
            });
            return json;
        }).catch((error) => {
            console.log("Got Error with Songs " + error)
        });
    }
};
