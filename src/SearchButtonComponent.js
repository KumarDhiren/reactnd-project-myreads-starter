import React from "react";
import { Link } from "react-router-dom";

const SearchButtonComponent = (props) => {
  return (
    <div className="open-search">
      <Link to="/search">
        <button className="open-search button">Add a book</button>
      </Link>
    </div>
  );
};

export default SearchButtonComponent;
