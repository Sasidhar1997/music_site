import React from 'react';
import { connect } from "react-redux";
import Songs from './APIs/action';
import '../style.css'


class songs extends React.Component {
    componentDidMount() {
        const { songs } = this.props
        songs();
    }
    render(){
        const { SONGS } = this.props
        const songsList = SONGS && SONGS.map((song,index)=>{
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
                    {/* <h5 class="card-title">Song Title :</h5> */}
                    <p class="card-text dtext">{songsList}</p>
                    {/* <a href="#" class="btn btn-primary">Play Time</a> */}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ songs }) => ({
    SONGS: songs.SONGS,
    // count: todo.count
});
const mapDispatchToProps = dispatch => ({
    songs: () => dispatch(Songs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(songs);

// export default connect(mapStateToProps)(songs);