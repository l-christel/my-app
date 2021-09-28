import './playlist.css';
import React from "react"
import ReactDOM from "react-dom"
import Tracklist from "../Tracklist/tracklist.js"

class Playlist extends React.Component {
  constructor (props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this); 
  }

handleNameChange (event) {
  this.props.onNameChange (event.target.value)
}

  render () {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
        <Tracklist 
          tracks={this.props.playlistTrack}
          onRemove={this.props.onRemove}
          isRemoval={true}/>{/*<!-- Add a TrackList component -->*/}
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>

    );
  }
  
}

export default Playlist;




