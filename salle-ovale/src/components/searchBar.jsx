import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import Loader from "./loader";
// import { querySubmit } from "../utils/dbquery";

const SearchBar = ({ search, dispatch, isSearched }) => {
  
  const [loader, setLoader] = useState(false);

  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    
    setLoader(true);

    try{
      const response = await axios.post("https://so-books-search-back.vercel.app/search", {
        userSearch: search,
      })
      
      const content = response.data;
      if (content.hasOwnProperty("noResult")) {
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
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    };
  };

  return (
    <article className={isSearched == null ? "searchBar wrapper" : "searchBar searchBarOn wrapper"}>
      {isSearched == null && (
        <aside className="home-infos">
          <p className="light-ital">
            Trouvez l&apos;emplacement d&apos;un livre dans la salle Ovale.
          </p>
        </aside>
      )}
      <form action="/" method="post" onSubmit={handleQuerySubmit}>
        <div className={isSearched == null ? "search-area" : "search-area search-area__searched"}>
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
      {loader && <Loader/>}
    </article>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.string,
  dispatch: PropTypes.func,
  isSearched: PropTypes.any,
};
