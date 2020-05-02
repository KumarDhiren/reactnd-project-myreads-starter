import React from "react";
import { getAll } from "./BooksAPI";
import "./App.css";
import SearchBarComponent from "./components/SearchBarComponent";
import DisplayBooksComponent from "./components/DisplayBooksComponent";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount = () => {
    getAll().then((books) => {
      this.setState({
        books,
      });
    });
  };

  updateBookStatus = (book, value) => {
    const { books } = this.state;
    const a = books.map((prevBook) => {
      if (prevBook === book) prevBook.shelf = value;
      return prevBook;
    });
    this.setState({
      books: a,
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <DisplayBooksComponent
              className="app-section"
              books={this.state.books}
              updateBookStatus={this.updateBookStatus}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBarComponent
              books={this.state.books}
              updateBookStatus={this.updateBookStatus}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
