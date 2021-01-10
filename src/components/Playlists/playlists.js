import React from 'react';
import { connect } from "react-redux";
import Playlists from './APIs/action';
import '../style.css'


class playlists extends React.Component {
    componentDidMount() {
        const { Playlists } = this.props
        Playlists();
    }
    render(){
        const { PLAYLISTS } = this.props
        const playList = PLAYLISTS && PLAYLISTS.map((song,index)=>{
            return(
                <tr index={index}>
                    <td className="right">{song.title ? <h5 class="card-title">Song Title :</h5> : null}</td>
                    <td>{song.title}</td>
                    <td>{song.title ? <a href="#" class="btn btn-primary">Play Time</a> : null}</td>
                </tr>
            )
        })
        return(
            <div>
                <div class="card list">
                    <div class="card-body"> 
                    <p class="card-text dtext">{playList}</p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ playlists }) => ({
    PLAYLISTS: playlists.PLAYLISTS,
});
const mapDispatchToProps = dispatch => ({
    playlists: () => dispatch(Playlists())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(playlists);