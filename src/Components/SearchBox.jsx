import { Component } from "react";
import "./search-box.css";
class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    //  console.log(this.props);
    return (
      <input
        className="search-box"
        type="search"
        placeholder="search monster"
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
