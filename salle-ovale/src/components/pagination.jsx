// import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Pagination = ({ search, resPages, currPage, dispatch }) => {
  let paginationNumbers = [];
  for (let i = 1; i <= resPages; i++) {
    paginationNumbers.push(i);
  }

  // Handling the query for the new page results
  async function handleNewPage(event) {
    event.preventDefault();
    // console.log(event.target.value);
    const nextPageQuery = event.target.value;
    axios
      .post("https://so-books-search-back.vercel.app/resultsNewPage", {
        userSearch: search,
        nextPage: nextPageQuery,
      })
      .then((response) => {
        const content = response.data;
        if (Object.prototype.hasOwnProperty.call(content, "noResult")) {
          console.log(content.noResult);
        } else {
          dispatch({
            type: "changePage",
            queryListResults: content.result,
            newPage: parseInt(nextPageQuery),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let currPageRange = null;
  if (resPages > 10) {
    currPageRange = null;
    const margin = "...";
    if (currPage <= 4) {
      currPageRange = paginationNumbers.slice(0, 5);
      currPageRange.push(margin, resPages);
    } else if (currPage >= resPages - 3) {
      currPageRange = paginationNumbers.slice(resPages - 6, resPages);
      currPageRange.unshift(1, margin);
    } else {
      currPageRange = paginationNumbers.slice(currPage - 3, currPage + 2);
      currPageRange.unshift(1, margin);
      currPageRange.push(margin, resPages);
    }
  }

  return (
    <article>
      {resPages <= 10 ? (
        <ul className="pagination title">
          {paginationNumbers.map((pageNum) => {
            return (
              <li key={pageNum} className="pagination-index">
                <button
                  value={pageNum}
                  className={
                    pageNum == currPage
                      ? "pagination-btn title pag-index__current-page"
                      : "pagination-btn title"
                  }
                  onClick={handleNewPage}
                >
                  {pageNum}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="pagination">
          {currPageRange.map((pageNum, i) => {
            if (Number.isInteger(pageNum)) {
              return (
                <li key={i} className="pagination-index">
                  <button
                    value={pageNum}
                    className={
                      pageNum == currPage
                        ? "pagination-btn title pag-index__current-page"
                        : "pagination-btn title"
                    }
                    onClick={handleNewPage}
                  >
                    {pageNum}
                  </button>
                </li>
              );
            } else {
              return (
                <li key={i} className="pagination-index">
                  <button
                    value={pageNum}
                    className={
                      pageNum == currPage
                        ? "pagination-btn title pag-index__current-page"
                        : "pagination-btn title"
                    }
                  >
                    {pageNum}
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </article>
  );
};

export default Pagination;

Pagination.propTypes = {
  search: PropTypes.string,
  resPages: PropTypes.number,
  currPage: PropTypes.number,
  dispatch: PropTypes.func,
};
