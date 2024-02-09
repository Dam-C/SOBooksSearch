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
      <h1
        className="title home-btn wrapper"
        onClick={() => {
          dispatch({
            type: "resetSearch",
          });
        }}
      >
        Salle Ovale
      </h1>
      <comp.SearchBar search={currSearch} dispatch={dispatch} />

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
        pathOpened == false && (
          <aside className="home-infos wrapper">
            <p className="tuto">
              Pour trouver l&apos;emplacement d&apos;un livre, rentrez son titre
              dans la barre de recherche.
            </p>
            <br />
            <p className="information">
              Information : <br />
              Une partie de la catégorie Bande-dessinée eset encore en cours de
              catégorisation.
            </p>
          </aside>
        )
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
      <footer>
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
