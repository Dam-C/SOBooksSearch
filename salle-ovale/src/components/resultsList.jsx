// import React from "react";
import PropTypes from "prop-types";
import { ResultListItem } from "./compIndex";
// import { useContext } from "react";
import Pagination from "./pagination";

const ResultsList = ({
  search,
  results,
  totResults,
  pages,
  currentPage,
  dispatch,
}) => {
  return (
    <section className="results-list wrapper">
      <h3 className="results-list__title title">Résultats ({totResults})</h3>
      {pages > 1 && (
        <Pagination
          search={search}
          dispatch={dispatch}
          resPages={pages}
          currPage={currentPage}
        />
      )}
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
      {pages > 1 && (
        <Pagination
          search={search}
          dispatch={dispatch}
          resPages={pages}
          currPage={currentPage}
        />
      )}
    </section>
  );
};
export default ResultsList;

ResultsList.propTypes = {
  search: PropTypes.string,
  results: PropTypes.array,
  totResults: PropTypes.number,
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  dispatch: PropTypes.func,
};
