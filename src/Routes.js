import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { render } from 'react-dom';
import songs from './components/Songs/songs';
import playlists from './components/Playlists/playlists'

export default class Routes extends Component {
    render(){
        return(
            <Switch>
                <>
                    <Route path="/" component={songs} exact />
                </>
        </Switch>
        )
    }
} 