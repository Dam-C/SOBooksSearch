import PropTypes from "prop-types";
import { indexation } from "../assets/indexation";

const BookLocation = ({ title, author, cote, date, spot, dispatch }) => {
  const imgSRC = indexation.find((loc) => loc.coteType == spot).indexLink;

  return (
    <article className="bookLoc-container">
      <button
        className="bookLoc-btn"
        onClick={() =>
          dispatch({
            type: "returnToRes",
          })
        }
      >
        <span className="backArrow"></span>Retour aux résultats
      </button>
      <div className="bookLoc-title-wrapper">
        <h4 className="bookLoc-title">{title}</h4>
        <div className="bookLoc__infos">
          <p className="bookLoc-author light-ital">{author}</p>
          <p className="bookLoc-date light-ital">Publication : {date}</p>
        </div>
        <p className="bookLoc-cote bold">{cote}</p>
      </div>
      <img className="book-spot" src={imgSRC} />
      <p>^</p>
      <p className="bookLoc-cote title">Entrée</p>
    </article>
  );
};

export default BookLocation;

BookLocation.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cote: PropTypes.string,
  date: PropTypes.string,
  spot: PropTypes.string,
  dispatch: PropTypes.func,
};
