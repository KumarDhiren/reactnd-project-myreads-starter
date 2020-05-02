import React from "react";
import { getAll } from "./BooksAPI";
import "./App.css";
import SearchBarComponent from "./SearchBarComponent";
import DisplayBooksComponent from "./DisplayBooksComponent";
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

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <DisplayBooksComponent books={this.state.books} />}
        />
        <Route
          path="/search"
          render={() => <SearchBarComponent books={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
