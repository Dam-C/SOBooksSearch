// import { useState } from "react";
import axios from "axios";
// import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ search, dispatch }) => {
  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:5000/search", { userSearch: search })
      .then((response) => {
        const content = response.data;
        if (Object.prototype.hasOwnProperty.call(content, "noResult")) {
          console.log(content.noResult);
          dispatch({
            type: "emptyResult",
            currSearch: search,
          });
        } else {
          dispatch({
            type: "newSearch",
            currSearch: search,
            queryListResults: content.result,
            totResults: content.totResults,
            pages: Math.ceil(content.totResults / 20),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <article>
      <form action="/" method="post" onSubmit={handleQuerySubmit}>
        <div className="search-wrapper">
          <input
            className="search-field"
            autoComplete="off"
            autoFocus
            id="userSearch"
            name="userSearch"
            placeholder="Rechercher un livre"
            type="text"
            onChange={(e) =>
              dispatch({
                type: "userSearch",
                currSearch: e.target.value,
              })
            }
            value={search}
            required
          />
          <button className="search-btn" type="submit">
            <i className="fa-solid fa-book"></i>
          </button>
        </div>
      </form>
    </article>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.string,
  dispatch: PropTypes.func,
};
