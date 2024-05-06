import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../filters/bookSearch/BookSearch";

const Books = ({ books, onSearch }) => {
  const [bookSelected, setBookSelected] = useState("");

  const selectedBookHandler = (book) => {
    setBookSelected(book);
  };

  const booksMapped = books.map((book) => (
    <BookItem
      key={book.bookId}
      title={book.bookTitle}
      author={book.bookAuthor}
      rating={book.bookRating}
      onBookSelected={selectedBookHandler}
      pages={book.pageCount}
      imageUrl={book.imageUrl}
    />
  ));
  return (

    <>
      <BookSearch onSearch={onSearch} />
      {bookSelected && (
        <p>
          El libro seleccionado actualmente es: <b>{bookSelected}</b>{" "}
        </p>
      )}
      <div className="d-flex justify-content-center flex-wrap">
        {booksMapped.length > 0 ?
          booksMapped :
          <p>No se encontraron libros cargados.</p>}
      </div>
    </>
  );
};

export default Books;
