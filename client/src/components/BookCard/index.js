function BookCard({ book, handleSave, handleDelete }) {
  let authors = book.authors;
  if (authors) {
    authors = book.authors.join(", ");
  } else {
    authors = "Not specified";
  }
  let description = book.description;
  if (!description) {
    description = "Not available";
  }

  return (
    <div className="card bg-primary mb-5">
      <div className="card-header bg-primary text-light border-light">
        <h3>{book.title}</h3>
        <p>by {authors}</p>
      </div>
      <div className="card-text container-fluid text-justify">
        <div className="row">
          <div className="col-12 col-sm-3 col-md-2 p-2">
            <img
              className="img-responsive w-100"
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-12 col-sm-9 col-md-10 p-2">
            <div className="row bg-white rounded-top m-2 p-2 text-dark">
              <div className="col-12">
                <h4>Description:</h4>
              </div>
              <div className="col-12">
                <p>{description}</p>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <a
                  href={book.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light ml-4 px-4"
                >
                  View
                </a>
                {handleSave && (
                  <button
                    value={book.id}
                    className="btn btn-success ml-4 px-4"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                )}
                {handleDelete && (
                  <button
                    value={book.id}
                    className="btn btn-danger ml-4 px-4"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
