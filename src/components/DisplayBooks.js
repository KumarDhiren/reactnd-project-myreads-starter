import React from "react";
import PropTypes from "prop-types";

import BookListContents from "./BookListContents";
import SearchButton from "./SearchButton";

const DisplayBooks = (props) => {
  const { updateBookStatus, books, bookshelfs } = props;

  const getShelfName = (bookshelf) => {
    switch (bookshelf) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want to Read";
      case "read":
        return "Read";
      default:
        return "None";
    }
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelfs.map((shelf) => (
            <BookListContents
              key={shelf}
              books={books}
              section={getShelfName(shelf)}
              filterOption={shelf}
              bookshelfs={bookshelfs}
              updateBookStatus={updateBookStatus}
            />
          ))}
        </div>
      </div>
      <SearchButton />
    </div>
  );
};

DisplayBooks.propTypes = {
  books: PropTypes.array.isRequired,
  bookshelfs: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired,
};

export default DisplayBooks;
