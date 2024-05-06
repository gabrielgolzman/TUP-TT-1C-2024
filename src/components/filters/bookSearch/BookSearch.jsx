import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const BookSearch = ({ onSearch }) => {
    const changeSearchHandler = (event) => {
        onSearch(event.target.value);
    };
    return (
        <Form.Group className="mb-3" controlId="searchBook">
            <Form.Control
                onChange={changeSearchHandler}
                type="text"
                placeholder="Buscar libro..."
            />
        </Form.Group>
    );
};

BookSearch.propTypes = {
    onSearch: PropTypes.func,
};

export default BookSearch;
