import './tracklist.css';
import React from "react"
import ReactDOM from "react-dom"
import Track from "../Track/track.js"

class Tracklist extends React.Component {
  render () {
    return (
        <div className="TrackList">
        {this.props.tracks.map(track => {
            return (<Track 
                track={track}
                key={track.id}
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval} />)
        })
        }
  
            {/*<!-- You will add a map method that renders a set of Track components  -->*/}
   </div>
    )
  }
  
}

export default Tracklist;




