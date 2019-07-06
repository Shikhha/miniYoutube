import React from "react";
import { placeholder } from "@babel/types";

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
            <input
              id="input"
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
