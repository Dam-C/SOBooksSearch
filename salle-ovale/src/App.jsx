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
    <>
      <header className="home-btn wrapper">
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
      </header>
        <main
          className={
            currTotResults == null ? "mainWrapper init" : "mainWrapper searched"
          }
          >

      <comp.SearchBar
        search={currSearch}
        isSearched={currTotResults}
        dispatch={dispatch}
        />

      {currPage != null && pathOpened == false ? (
        <section className="results-wrapper">
        <div className="results-head-wrapper">

        <h3 className="results-list__head title">Résultats ({currTotResults})</h3>
        
        {currPages > 1 && (
          <comp.Pagination
          search={currSearch}
          resPages={currPages}
          currPage={currPage}
          dispatch={dispatch}
          />
          )}
        </div>
        
        <comp.ResultsList
          results={currResults}
          dispatch={dispatch}
          />
          </section>
      ) : (
        pathOpened == false && null
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
    </main>
      {pathOpened == false && (
        
        <footer className="footer wrapper">
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
            )}
    </>
  );
}

export default App;
