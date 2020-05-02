import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const BookListContents = (props) => {
  const { books, section, filterOption, updateBookStatus } = props;

  const booksTodisplay = books.filter((book) => book.shelf === filterOption);

  return (
    <div className="bookshelf">
      <h2
        className="bookshelf-title"
        style={{ color: "white", textAlign: "center" }}
      >
        {section}
      </h2>
      <BookList books={booksTodisplay} updateBookStatus={updateBookStatus} />
    </div>
  );
};

BookListContents.propTypes = {
  books: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
};

export default BookListContents;
