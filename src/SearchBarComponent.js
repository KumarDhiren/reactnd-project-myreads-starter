import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

export default class SearchBarComponent extends Component {
  state = {
    searchText: "",
  };

  handleOnChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchText: value,
    });
  };

  render() {
    const { books } = this.props;
    const { searchText } = this.state;

    const resultingArray =
      searchText === ""
        ? []
        : books.filter((book) =>
            book.title.toLowerCase().includes(searchText.toLowerCase())
          );

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchText}
              onChange={this.handleOnChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {resultingArray.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
