import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const BookListContents = (props) => {
  const { books, section, filterOption, updateBookStatus } = props;

  const booksTodisplay = books.filter((book) => {
    if (book.shelf === undefined) book.shelf = "none";
    return book.shelf === filterOption;
  });

  const style =
    section === "Currently Reading"
      ? { color: "green", textAlign: "center" }
      : section === "Want to Read"
      ? { color: "orange", textAlign: "center" }
      : section === "Read"
      ? { color: "#99094f", textAlign: "center" }
      : { color: "#3f1db3", textAlign: "center" };

  return (
    booksTodisplay.length !== 0 && (
      <div className="bookshelf">
        <h2 className="bookshelf-title" style={style}>
          {section}
        </h2>
        <BookList books={booksTodisplay} updateBookStatus={updateBookStatus} />
      </div>
    )
  );
};

BookListContents.propTypes = {
  books: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
};

export default BookListContents;
