import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookList = (props) => {
  const { books, updateBookStatus } = props;
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            bookshelfs={props.bookshelfs}
            updateBookStatus={updateBookStatus}
          />
        ))}
      </ol>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired,
  bookshelfs: PropTypes.array.isRequired,
};

export default BookList;
