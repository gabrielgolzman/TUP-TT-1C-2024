import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({ onHide, showDeleteModal, onDelete }) => {
    const deleteBookHandler = () => {
        onDelete();
        onHide();
    };
    const handleClose = () => onHide();
    return (
        <>
            <Modal show={showDeleteModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Está seguro que desea eliminar el libro?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger" onClick={deleteBookHandler}>
                        Eliminar libro
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteModal;