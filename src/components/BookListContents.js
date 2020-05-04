import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

const BookListContents = (props) => {
  const { books, section, filterOption, updateBookStatus } = props;

  const booksTodisplay = books.filter((book) => {
    if (book.shelf === undefined) book.shelf = "none";
    return book.shelf === filterOption;
  });

  const style = (section) => {
    switch (section) {
      case "Currently Reading":
        return { color: "green", textAlign: "center" };
      case "Want to Read":
        return { color: "orange", textAlign: "center" };
      case "Read":
        return { color: "#99094f", textAlign: "center" };
      default:
        return { color: "#3f1db3", textAlign: "center" };
    }
  };

  return (
    booksTodisplay.length !== 0 && (
      <div className="bookshelf">
        <h2 className="bookshelf-title" style={style(section)}>
          {section}
        </h2>
        <BookList
          books={booksTodisplay}
          bookshelfs={props.bookshelfs}
          updateBookStatus={updateBookStatus}
        />
      </div>
    )
  );
};

BookListContents.propTypes = {
  books: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
  filterOption: PropTypes.string.isRequired,
  updateBookStatus: PropTypes.func.isRequired,
  bookshelfs: PropTypes.array.isRequired,
};

export default BookListContents;
