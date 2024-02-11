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
      <h4 className="book-item__title">{title}</h4>
      <div className="book-item-infos">
        <p className="book-item__author light-ital">{author}</p>
        {/* <p className="book-item__cote bold">{cote}</p> */}
      </div>
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
