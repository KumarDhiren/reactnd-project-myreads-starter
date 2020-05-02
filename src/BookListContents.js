import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const BookListContents = (props) => {
  const { books, section, filterOption } = props;

  const booksTodisplay = books.filter((book) => book.shelf === filterOption);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <BookList books={booksTodisplay} />
    </div>
  );
};

BookListContents.propTypes = {
  books: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
};

export default BookListContents;
