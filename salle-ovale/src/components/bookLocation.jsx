import PropTypes from "prop-types";
import { indexation } from "../assets/indexation";

const BookLocation = ({ title, author, cote, date, spot, dispatch }) => {
  const imgSRC = indexation.find((loc) => loc.coteType == spot).indexLink;

  return (
    <article className="bookloc-wrapper">
      <div className="bookloc-head-wrapper">
        <p className="bookloc-head__title title">Emplacement</p>
      </div>
        <button
          className="bookloc-head__btn-backtores"
          onClick={() =>
            dispatch({
              type: "returnToRes",
            })
          }
        >
          <i className="fa-solid fa-arrow-left bookloc-head__arrow"></i><span className="bookloc-head__text-res">
            Résultats</span>
        </button>
        <img className="bookloc-spot__ovale-map" src={imgSRC} />
        <p>^</p>
        <p className="bookloc-spot__entry title">Entrée</p>
      <div className="bookloc-infos-wrapper">
        <p className="bookloc-infos__cote bold">{cote}</p>
        <h4 className="bookloc-infos__title">{title}</h4>
        {/* <div className="bookloc-infos__misc">
          <p className="bookloc-infos__misc-author light-ital">{author}</p>
          <p className="bookloc-infos__misc-date light-ital">Publication : {date}</p>
        </div> */}
      </div>
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
