import CardHeader from "../CardHeader";

function SearchForm({handleInputChange, searchBooks, value}) {
    return (
        <div className="card bg-dark mx-5 mb-4">
            <CardHeader>Search Book</CardHeader>
            <div className="card-text">
                <form onSubmit={searchBooks}>
                    <div className="form-group row">
                        <div className="d-flex col-12 col-md-9 col-lg-10 col-xl-10 pt-3">
                            <input value={value} type="text" className="form-control flex-grow-1 mx-3" id="search-book" placeholder="Search a book" onChange={handleInputChange} />
                        </div>
                        <div className="d-flex col-12 col-md-3 col-lg-2 col-xl-2 pt-3">
                            <button type="submit" className="btn btn-light flex-grow-1 mx-3">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SearchForm;