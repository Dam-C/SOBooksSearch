import PropTypes from "prop-types";

const ResultsListItem = ({ title, author, cote, date, loc, dispatch }) => {
  return (
    <article
      className="book-item"
      onClick={() =>
        dispatch({
          type: "showPath",
          titre: title,
          auteur: author,
          coteLivre: cote,
          dateLivre: date,
          localisation: loc,
        })
      }
    >
      <div className="book-item-title-and-author">
        <h4 className="book-item__title">{title}</h4>
        <p className="book-item__author">{author}</p>
      </div>
      <p className="book-item__cote">{cote}</p>
    </article>
  );
};

export default ResultsListItem;

ResultsListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cote: PropTypes.string,
  date: PropTypes.string,
  loc: PropTypes.string,
  dispatch: PropTypes.func,
};
