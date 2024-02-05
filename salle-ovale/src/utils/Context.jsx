// import { createContext } from "react";

// export const searchContext = createContext(null);
// export const searchDispatchContext = createContext(null);

export const initialState = {
  search: "",
  currentResults: [],
  resultsCount: null,
  resultsPages: null,
  resultsCurrentPage: null,
  pathToBook: false,
  book: { title: "", author: "", date: "", cote: "", spot: "" },
};

export function searchReducers(state, action) {
  switch (action.type) {
    case "userSearch": {
      return {
        ...state,
        search: action.currSearch,
      };
    }
    case "newSearch": {
      return {
        ...state,
        search: action.currSearch,
        currentResults: action.queryListResults,
        resultsCount: action.totResults,
        resultsPages: action.pages,
        resultsCurrentPage: 1,
        pathToBook: false,
        book: { title: "", author: "", date: "", cote: "", spot: "" },
      };
    }
    case "changePage": {
      return {
        ...state,
        currentResults: action.queryListResults,
        resultsCurrentPage: action.newPage,
      };
    }
    case "showPath": {
      return {
        ...state,
        pathToBook: true,
        book: {
          title: action.titre,
          author: action.auteur,
          date: action.dateLivre,
          cote: action.coteLivre,
          spot: action.localisation,
        },
      };
    }
    case "returnToRes": {
      return {
        ...state,
        pathToBook: false,
        book: { title: "", author: "", date: "", cote: "", spot: "" },
      };
    }
    case "resetSearch": {
      return {
        search: "",
        currentResults: [],
        resultsCount: null,
        resultsPages: null,
        resultsCurrentPage: null,
        pathToBook: false,
        book: { title: "", author: "", date: "", cote: "", spot: "" },
      };
    }
    case "emptyResult": {
      return {
        search: action.currSearch,
        currentResults: [],
        resultsCount: 0,
        resultsPages: null,
        resultsCurrentPage: null,
        pathToBook: false,
        book: { title: "", author: "", date: "", cote: "", spot: "" },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
