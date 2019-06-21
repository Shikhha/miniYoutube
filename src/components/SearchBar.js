import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  state = { term: "" };
  inputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.inputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
