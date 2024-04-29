// import React from "react";
import PropTypes from "prop-types";
import { ResultListItem } from "./compIndex";

const ResultsList = ({
  results,
  dispatch
}) => {
  return (
    <section className="results-list">
      <ul className="results-list__list">
        {results.map((book, i) => {
          return (
            <li key={i} className="result-item">
              <ResultListItem
                title={book.title}
                author={book.author}
                cote={book.cote}
                loc={book.location}
                date={book.date}
                dispatch={dispatch}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ResultsList;

ResultsList.propTypes = {
  results: PropTypes.array,
  dispatch: PropTypes.func
};
