import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row } from "react-bootstrap";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import Books from "../books/Books";
import NewBook from "../newBook/NewBook";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const books = [
  {
    id: 1,
    bookTitle: "100 años de soledad",
    bookAuthor: "Gabriel García Marquez",
    bookRating: Array(5).fill("*"),
    summary:
      "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo.",
    pageCount: 410,
    imageUrl:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
  },
  {
    id: 2,
    bookTitle: "Asesinato en el Orient Express",
    bookAuthor: "Agatha Christie",
    bookRating: Array(4).fill("*"),
    pageCount: 256,
    summary:
      "En un lugar aislado de la antigua Yugoslavia, en plena madrugada, una fuerte tormenta de nieve obstaculiza la línea férrea por donde circula el Orient Express. Procedente de la exótica Estambul, en él viaja el detective Hércules Poirot, que repentinamente se topa con uno de los casos más desconcertantes de su carrera: en el compartimiento vecino ha sido asesinado Samuel E. Ratchett mientras dormía, pese a que ningún indicio trasluce un móvil concreto. Poirot aprovechará la situación para indagar entre los ocupantes del vagón, que a todas luces deberían ser los únicos posibles autores del crimen.",
    imageUrl:
      "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    bookTitle: "Las dos torres",
    bookAuthor: "J.R.R Tolkien",
    bookRating: Array(5).fill("*"),
    pageCount: 352,
    summary:
      "La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam avanzan solos en su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal",
    imageUrl:
      "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    bookTitle: "50 sombras de Grey",
    bookAuthor: "E.L James",
    bookRating: Array(1).fill("*"),
    pageCount: 514,
    summary:
      "Cincuenta sombras de Grey es un libro de E.L. James que cuenta la historia de Anastasia Steele, una estudiante de literatura de 21 años, y Christian Grey, un empresario millonario. Anastasia es asignada para entrevistar a Christian para el periódico universitario, y queda impresionada por su atractivo y su misterio. Sin embargo, también encuentra a Christian intimidante, y decide romper con él debido a sus peculiares prácticas eróticas y sus oscuros secretos",
    imageUrl:
      "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
  },
];

const Dashboard = () => {
  const [booksFiltered, setBooksFiltered] = useState([]);
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthenticationContext);

  const searchHandler = (searchInput) => {
    if (searchInput === "") setBooksFiltered(books);

    const searchInputUpperCase = searchInput.toUpperCase();
    const booksSearched = books.filter((book) =>
      book.bookTitle.toUpperCase().includes(searchInputUpperCase)
    );
    setBooksFiltered(booksSearched);
  };

  const handleLogOut = () => {
    handleLogout();
    navigate("/login");
  };

  useEffect(() => {
    fetch("http://localhost:8000/books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        const booksMapped = bookData
          .map((book) => ({
            ...book,
            bookRating: Array(book.bookRating?.length).fill("*"),
          }))
          .sort((a, b) => b.id - a.id);
        setBooksFiltered(booksMapped);
      })
      .catch((error) => console.log(error));
  }, []);

  const addBookHandler = (newBook) => {
    const bookData = { ...newBook, bookId: Math.random() };

    fetch("http://localhost:8000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors");
        }
      })
      .then(() => {
        const newBooksArray = [bookData, ...booksFiltered];
        setBooksFiltered(newBooksArray);
      })
      .catch((error) => console.log(error));
  };

  const deleteBookHandler = (id) => {
    fetch(`http://localhost:8000/books/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setBooksFiltered((prevBooks) =>
          prevBooks.filter((book) => book.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Row className="my-3 justify-content-end w-100">
        <ToggleTheme />
        <Button className="w-auto my-2 me-3" onClick={handleLogOut}>
          Cerrar sesión
        </Button>
      </Row>
      <h2>¡Bienvenidos a Books Champion!</h2>
      <p>¡Quiero leer libros!</p>
      <NewBook onAddBook={addBookHandler} />
      <Books
        onDelete={deleteBookHandler}
        books={booksFiltered}
        onSearch={searchHandler}
      />
    </>
  );
};

export default Dashboard;
