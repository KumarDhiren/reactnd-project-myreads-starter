import React, { Component } from "react";
import PropTypes from "prop-types";

import BookListContents from "./BookListContents";
import SearchButtonComponent from "./SearchButtonComponent";

export default class DisplayBooksComponent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookListContents
              books={this.props.books}
              section="Currently Reading"
              filterOption="currentlyReading"
            />
            <BookListContents
              books={this.props.books}
              section="Want to Read"
              filterOption="wantToRead"
            />
            <BookListContents
              books={this.props.books}
              section="Read"
              filterOption="read"
            />
          </div>
        </div>
        <SearchButtonComponent />
      </div>
    );
  }
}
