import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../filters/bookSearch/BookSearch";
import DeleteModal from "../ui/deleteModal/DeleteModal";

const Books = ({ books, onSearch, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState(-1);

  const showModalHandler = (id) => {
    setShowDeleteModal(true);
    setBookIdToDelete(id);
  };

  const hideModalHandler = () => {
    setShowDeleteModal(false);
    setBookIdToDelete(-1);
  };

  const deleteBookHandler = () => {
    onDelete(bookIdToDelete);
  };

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
      onShowModal={showModalHandler}
    />
  ));
  return (
    <>
      <BookSearch onSearch={onSearch} />
      <DeleteModal
        onDelete={deleteBookHandler}
        showDeleteModal={showDeleteModal}
        onHide={hideModalHandler} />
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
