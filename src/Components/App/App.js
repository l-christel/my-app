//import logo from './logo.svg';
import "./App.css";
import Playlist from "../Playlist/playlist.js";
import Searchresults from "../Searchresults/searchresults.js";
import Searchbar from "../Searchbar/searchbar.js";
import React from "react";
import Spotify from "../util/Spotify";


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {searchResults : [{name: "name1", artist: "artist1", album: "album1", id: 1},
                                  {name: "name2", artist: "artist2", album: "album2", id: 2},
                                  {name: "name3", artist: "artist3", album: "album3", id: 3}
                                                                                      ],
                   playlistName: "My Playlistname",
                   playlistTrack: [{name: "playlistname1", artist: "playlistartist1", album: "playlistalbum1", id: 1},
                                   {name: "playlistname2", artist: "playlistartist2", album: "playlistalbum2", id: 2},
                                   {name: "playlistname3", artist: "playlistartist3", album: "playlistalbum3", id: 3}
                                                                                      ]                                                                 
                                                                                    };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
 }

   addTrack (track) {
    let tracks= this.state.playlistTrack
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }

    tracks.push(track)
    this.setState({playlistTrack: tracks});
  }                                                                                  
  
  removeTrack (track) {
    let tracks= this.state.playlistTrack
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName (name) {
    this.setState ({playlistName : name})
  }
  savePlaylist () {
    alert("This method is linked to the button correctly")
    let trackUris = this.state.playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState ({
        playlistName: "New Playlist",
        playlistTracks: []
      })
    })
  }

  search (term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <Searchbar onSearch={this.search}/>{/*<!-- Add a SearchBar component -->*/}
          <div className="App-playlist">
          <Searchresults 
            searchResults={this.state.searchResults}
            onAdd={this.addTrack} />{/*<!-- Add a SearchResults component -->*/}
          <Playlist 
            playlistName={this.state.playlistName}
            playlistTrack={this.state.playlistTrack}
            onRemove={this.state.removeTrack}
            onNameChange={this.state.updatePlaylistName}
            onSave={this.state.savePlaylist}
            />{/*<!-- Add a Playlist component -->*/}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
