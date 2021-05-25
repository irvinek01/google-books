import React, {useState, useEffect} from "react";
import BookList from "../components/BookList";
import API from "../utils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Saved() {
    const [state, setState] = useState({
        books: []
    });

    function getSavedBooks() {
        API.getBooksAPI().then(res => setState({...state, books: res.data}));
    };

    useEffect(getSavedBooks,[state]);

    function deleteToast(title) {
        return toast.error(`Book deleted successfully: ${title}`);
    }

    async function handleDelete(e) {
        e.preventDefault();
        const id = e.target.value;
        const book = state.books.filter(book => book.id === id);
        await API.deleteBookAPI(id);
        deleteToast(book[0].title);
        getSavedBooks();
    }

    return (
        <>
            <BookList books={state.books} handleDelete={handleDelete} />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
        </>
    )
};

export default Saved;