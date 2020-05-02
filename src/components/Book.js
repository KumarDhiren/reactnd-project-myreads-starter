import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { book, updateBookStatus } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    if (value !== "none") updateBookStatus(book, event.target.value);
  };

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={handleChange}>
              <option value="move">Move to...</option>
              <option
                value="currentlyReading"
                disabled={book.shelf === "currentlyReading"}
              >
                Currently Reading
              </option>
              <option value="wantToRead" disabled={book.shelf === "wantToRead"}>
                Want to Read
              </option>
              <option value="read" disabled={book.shelf === "read"}>
                Read
              </option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" style={{ color: "white" }}>
          {book.title}
        </div>
        <div className="book-authors" style={{ color: "#fbaacf" }}>
          {book.authors}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
