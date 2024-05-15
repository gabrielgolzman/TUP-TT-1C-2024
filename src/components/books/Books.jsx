import BookItem from "../bookItem/BookItem";
import BookSearch from "../filters/bookSearch/BookSearch";

const Books = ({ books, onSearch }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      title={book.bookTitle}
      author={book.bookAuthor}
      rating={book.bookRating}
      pages={book.pageCount}
      summary={book.summary}
      imageUrl={book.imageUrl}
    />
  ));
  return (
    <>
      <BookSearch onSearch={onSearch} />
      <div className="d-flex justify-content-center flex-wrap">
        {booksMapped.length > 0 ? (
          booksMapped
        ) : (
          <p>No se encontraron libros cargados.</p>
        )}
      </div>
    </>
  );
};

export default Books;
