import React, { Component } from "react";
import PropTypes from "prop-types";

import BookListContents from "./BookListContents";
import SearchButtonComponent from "./SearchButtonComponent";

export default class DisplayBooksComponent extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookStatus: PropTypes.func.isRequired,
  };

  render() {
    const { updateBookStatus } = this.props;

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
              updateBookStatus={updateBookStatus}
            />
            <BookListContents
              books={this.props.books}
              section="Want to Read"
              filterOption="wantToRead"
              updateBookStatus={updateBookStatus}
            />
            <BookListContents
              books={this.props.books}
              section="Read"
              filterOption="read"
              updateBookStatus={updateBookStatus}
            />
          </div>
        </div>
        <SearchButtonComponent />
      </div>
    );
  }
}
