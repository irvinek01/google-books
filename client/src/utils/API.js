import axios from "axios";

const API = {
  searchBooksAPI: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },

  getBooksAPI: function () {
    return axios.get("/api/books");
  },

  saveBookAPI: function (book) {
    return axios.post("/api/books", book);
  },

  deleteBookAPI: function (id) {
    return axios.delete("/api/books/" + id);
  },
};

export default API;
