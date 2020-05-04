import React from "react";
import { getAll, update, get } from "./BooksAPI";
import "./App.css";
import SearchBar from "./components/SearchBar";
import DisplayBooks from "./components/DisplayBooks";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    bookshelfs: ["currentlyReading", "wantToRead", "read", "none"],
  };

  componentDidMount = () => {
    getAll().then((books) => {
      this.setState({
        books,
      });
    });
  };

  updateBookStatus = (book, shelf) => {
    book.shelf = shelf;
    update(book, shelf).then((b) => {
      if (b.shelf === undefined) b.shelf = shelf;
      if (shelf === "none") {
        get(book.id).then((book) => {
          this.setState({
            books: [...this.state.books.filter((b) => b.id !== book.id), book],
          });
        });
      } else {
        getAll().then((books) => this.setState({ books }));
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <DisplayBooks
              className="app-section"
              books={this.state.books}
              bookshelfs={this.state.bookshelfs}
              updateBookStatus={this.updateBookStatus}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBar
              books={this.state.books}
              updateBookStatus={this.updateBookStatus}
              bookshelfs={this.state.bookshelfs}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
