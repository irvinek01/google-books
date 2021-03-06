import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchForm from "../components/SearchForm";
import BookList from "../components/BookList";
import API from "../utils/API";

function Search() {
  const [state, setState] = useState({
    searchBoxVal: "",
    books: [],
  });

  async function searchBooks(e) {
    e.preventDefault();
    const searchResult = await API.searchBooksAPI(state.searchBoxVal.trim());
    const books = searchResult.data.items.map((book) => {
      const bookData = {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image:
          book.volumeInfo.imageLinks.thumbnail ||
          "https://via.placeholder.com/150",
        link: book.volumeInfo.infoLink,
      };
      return bookData;
    });
    setState({ searchBoxVal: "", books });
    console.log(state.searchBoxVal);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setState({ ...state, searchBoxVal: e.target.value });
  }

  function saveToast(title) {
    return toast.success(`Book titled ${title} saved!`);
  }

  async function handleSave(e) {
    e.preventDefault();
    const id = e.target.value;
    const book = state.books.filter((book) => book.id === id);
    await API.saveBookAPI(book[0]);
    saveToast(book[0].title);
    setState({ ...state, books: state.books.filter((book) => book.id !== id) });
  }

  return (
    <>
      <SearchForm
        value={state.searchBoxVal}
        searchBooks={searchBooks}
        handleInputChange={handleInputChange}
      />
      <BookList books={state.books} handleSave={handleSave} />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar
      />
    </>
  );
}

export default Search;
