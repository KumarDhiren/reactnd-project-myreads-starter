import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const BookList = (props) => {
  const { books, updateBookStatus, existingBooks } = props;
  const selected = (book) => {
    const found = existingBooks.find((b) => b.title === book.title);
    if (found === undefined) {
      return " none";
    } else {
      return found.shelf;
    }
  };

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              book={book}
              bookshelfs={props.bookshelfs}
              updateBookStatus={updateBookStatus}
              selected={selected(book)}
            />
          );
        })}
      </ol>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookStatus: PropTypes.func.isRequired,
  bookshelfs: PropTypes.array.isRequired,
  existingBooks: PropTypes.array.isRequired,
};

export default BookList;
