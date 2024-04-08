import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
  const booksMapped = books.map((book, index) => (
    <BookItem
      key={index}
      title={book.bookTitle}
      author={book.bookAuthor}
      rating={book.bookRating}
      pages={book.pageCount}
      imageUrl={book.imageUrl}
    />
  ));
  return (
    <div className="d-flex justify-content-center flex-wrap">{booksMapped}</div>
  );
};

export default Books;
