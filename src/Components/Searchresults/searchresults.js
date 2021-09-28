import './searchresults.css';
import React from "react"
import ReactDOM from "react-dom"
import Tracklist from "../Tracklist/tracklist.js"

class Searchresults extends React.Component {
  

  render () {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist 
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
          />{/*<!-- Add a TrackList component -->*/}
    </div>

    );
  }
  
}

export default Searchresults;


