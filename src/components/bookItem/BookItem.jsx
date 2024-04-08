import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const BookItem = ({ title, author, rating, pages, imageUrl }) => {
  return (
    <Card className="mx-3" style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        alt="Portada de libro"
        src={
          imageUrl !== ""
            ? imageUrl
            : "https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating?.length} estrellas</div>
        <p>{pages} páginas</p>
      </Card.Body>
    </Card>
  );
};

export default BookItem;

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  rating: PropTypes.array,
};
