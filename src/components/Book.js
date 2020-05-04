import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { book, updateBookStatus, selected } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    updateBookStatus(book, value);
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
            <select onChange={handleChange} value={selected}>
              <option value="move">Move to...</option>
              <option
                value={props.bookshelfs[0]}
                disabled={book.shelf === props.bookshelfs[0]}
              >
                Currently Reading
              </option>
              <option
                value={props.bookshelfs[1]}
                disabled={book.shelf === props.bookshelfs[1]}
              >
                Want to Read
              </option>
              <option
                value={props.bookshelfs[2]}
                disabled={book.shelf === props.bookshelfs[2]}
              >
                Read
              </option>
              <option value={props.bookshelfs[3]}>None</option>
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
  bookshelfs: PropTypes.array.isRequired,
};

export default Book;
