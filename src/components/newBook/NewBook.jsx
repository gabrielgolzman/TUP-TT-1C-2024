import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";


const NewBook = ({ onAddBook }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [pageCount, setPageCount] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
    };
    const changeAuthorHandler = (event) => {
        setAuthor(event.target.value);
    };
    const changeRatingHandler = (event) => {
        setRating(event.target.value);
    };
    const changePageCount = (event) => {
        setPageCount(event.target.value);
    };
    const changeImageUrl = (event) => {
        setImageUrl(event.target.value);
    };

    const submitBookHandler = (event) => {
        event.preventDefault();
        const newBook = {
            bookTitle: title,
            bookAuthor: author,
            bookRating: rating !== ""
                ? Array(parseInt(rating, 10)).fill("*")
                : Array(0),
            pageCount: parseInt(pageCount, 10),
            imageUrl
        };
        onAddBook(newBook);
        setTitle("");
        setAuthor("");
        setPageCount("");
        setRating("");
        setImageUrl("");
    };
    return (
        <Card className="m-4 w-50" bg="success">
            <Card.Body>
                <Form className="text-white" onSubmit={submitBookHandler}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookTitle">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    value={title}
                                    placeholder="Ingresar título"
                                    onChange={changeTitleHandler}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookAuthor">
                                <Form.Label>Autor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese autor"
                                    onChange={changeAuthorHandler}
                                    value={author}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookRating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de estrellas"
                                    max={5}
                                    min={0}
                                    onChange={changeRatingHandler}
                                    value={rating}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="bookPageCount">
                                <Form.Label>Cantidad de páginas</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar cantidad de páginas"
                                    min={1}
                                    onChange={changePageCount}
                                    value={pageCount}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="bookImageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingresar url de imagen"
                                onChange={changeImageUrl}
                                value={imageUrl}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex justify-content-end">
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Agregar lectura
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBook;