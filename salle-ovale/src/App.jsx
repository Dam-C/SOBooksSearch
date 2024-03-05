import "./App.css";
import * as comp from "./components/compIndex";
import { useReducer } from "react";
import { searchReducers, initialState } from "./utils/Context";

function App() {
  const [state, dispatch] = useReducer(searchReducers, initialState);

  const currSearch = state.search;
  const currResults = state.currentResults;
  const currTotResults = state.resultsCount;
  const currPages = state.resultsPages;
  const currPage = state.resultsCurrentPage;
  const pathOpened = state.pathToBook;
  const bookLoc = state.book;

  return (
    <main
      className={
        currTotResults == null ? "mainWrapper init" : "mainWrapper searched"
      }
    >
      <div className="home-btn wrapper">
        <h1
          className="title"
          onClick={() => {
            dispatch({
              type: "resetSearch",
            });
          }}
        >
          Salle Ovale
        </h1>
        {/* <div className="fren">
          <span>FR</span> | <span>EN</span>
        </div> */}
      </div>

      <comp.SearchBar
        search={currSearch}
        dispatch={dispatch}
        isSearched={currTotResults}
      />

      {currPage != null && pathOpened == false ? (
        <comp.ResultsList
          search={currSearch}
          results={currResults}
          totResults={currTotResults}
          pages={currPages}
          currentPage={currPage}
          dispatch={dispatch}
        />
      ) : (
        pathOpened == false && null
        // <aside className="home-infos wrapper">
        //   <p className="tuto">Trouvez l&apos;emplacement d&apos;un livre.</p>
        //   {/* <p className="information">
        //     Information : <br />
        //     Une partie de la catégorie Bande-dessinée eset encore en cours de
        //     catégorisation.
        //   </p> */}
        // </aside>
      )}

      {currTotResults == 0 && <comp.NoResult />}

      {pathOpened && (
        <comp.BookLocation
          title={bookLoc.title}
          author={bookLoc.author}
          cote={bookLoc.cote}
          date={bookLoc.date}
          spot={bookLoc.spot}
          dispatch={dispatch}
        />
      )}
      {/* <button
        onClick={() => {
          console.log(state);
        }}
        >
        Check
      </button> */}
      <footer className="wrapper">
        <p className="disclaimer">
          Pour en savoir plus sur la salle Ovale et la BNF
        </p>
        <p className="bnf-links">
          <a
            className="bnf-link"
            href="https://catalogue.bnf.fr/index.do"
            target="blank"
          >
            Lien Catalogue
          </a>
          <a className="bnf-link" href="https://www.bnf.fr/fr" target="blank">
            Lien BNF
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
