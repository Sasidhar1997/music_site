import React from 'react';
// import ReactDOM from 'react-dom';
import img from '../icons/img.svg'
import './style.css'
// import Main from "./main"



export default class Header extends React.Component {
render(){
    return(
        <div>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <img src={img} width="30" height="30" class="d-inline-block align-top head" alt="" />
                VBI Music App
                </a>
            </nav>
            <div class="btn-group buttons" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">All Songs</button>
                    <button type="button" class="btn btn-secondary">Playlists</button>
            </div>
        </div>
    )
}
}