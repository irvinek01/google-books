import BookCard from "../BookCard";
import CardHeader from "../CardHeader";

function BookList({books, handleSave, handleDelete}) {
    if (!books.length) {
        return (
            <div className="card bg-dark mx-5">
            <CardHeader>Results</CardHeader>
            <div className="card-body">
                <h5 className="text-light">Search a book!</h5>
            </div>
        </div>
        )
    }
    return (
        <div className="p-3">
            <CardHeader>Book Results:</CardHeader>
            {books.map(book => {
                return (<BookCard key={book.id} book={book} handleSave={handleSave} handleDelete={handleDelete} />)
            })}
        </div>
    )
};

export default BookList;