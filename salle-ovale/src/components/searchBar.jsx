import axios from "axios";
import PropTypes from "prop-types";

const SearchBar = ({ search, dispatch, isSearched }) => {
  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    axios
      // .post("http://127.0.0.1:5000/search", {
      .post("https://so-books-search-back.vercel.app/search", {
        userSearch: search,
      })
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
    <article className="searchBar wrapper">
      {isSearched == null && (
        <aside className="home-infos">
          <p className="light-ital">
            Trouvez l&apos;emplacement d&apos;un livre dans la salle Ovale.
          </p>
        </aside>
      )}
      <form action="/" method="post" onSubmit={handleQuerySubmit}>
        <div className="search-area">
          <input
            className="search-field"
            autoComplete="off"
            autoFocus
            id="userSearch"
            name="userSearch"
            placeholder="Titre du livre"
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
            <i className="mlicon fa-solid fa-magnifying-glass"></i>
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
  isSearched: PropTypes.any,
};
