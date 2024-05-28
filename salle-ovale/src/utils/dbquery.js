import axios from "axios";

export const querySubmit = async (search) => {
    try{
      const response = await axios.post("https://so-books-search-back.vercel.app/search", {
        userSearch: search,
      })
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
      
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };