import './searchbar.css';
import React from "react"
import ReactDOM from "react-dom"

class Searchbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {term: ""};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search () {
    this.props.onSearch(this.state.term)
  }

  handleTermChange (event2) {
    this.setState ({term: event2.target.value})
  }
  
  render () {
    return (
      <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
      <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
  
}


export default Searchbar;
