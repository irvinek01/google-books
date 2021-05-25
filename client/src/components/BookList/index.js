import BookCard from "../BookCard";
import CardHeader from "../CardHeader";

function BookList({ books, handleSave, handleDelete }) {
  if (!books.length) {
    return (
      <div className="p-3">
        <CardHeader>Type and search a book...</CardHeader>
      </div>
    );
  }
  return (
    <div className="p-3">
      <CardHeader>Book Results:</CardHeader>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            book={book}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default BookList;
