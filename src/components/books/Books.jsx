import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.bookId}
      title={book.bookTitle}
      author={book.bookAuthor}
      rating={book.bookRating}
      pages={book.pageCount}
      imageUrl={book.imageUrl}
    />
  ));
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {booksMapped.length > 0 ?
        booksMapped :
        <p>No se encontraron libros cargados.</p>}
    </div>
  );
};

export default Books;
