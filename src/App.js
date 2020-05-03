import React from "react";
import { getAll, update, get } from "./BooksAPI";
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

  updateBookStatus = (book, shelf) => {
    console.log(book, shelf);
    update(book, shelf).then(() => {
      if (shelf === "none") {
        get(book.id).then((book) => {
          this.setState({ books: [...this.state.books, book] });
        });
      } else {
        getAll().then((books) => {
          this.setState({ books });
        });
      }
    });
    console.log(this.state.books.find((fbook) => fbook === book));
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
