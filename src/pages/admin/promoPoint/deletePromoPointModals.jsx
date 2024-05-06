import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deletePromoPointData, hideDeletePromoPointModal } from "../../../store/admin/promoPoint";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeletePromoPoint() {
    const show = useSelector((state) => state.promoPointStore.deletePromoPointModal);
    const deleteId = useSelector((state) => state.promoPointStore.deleteId);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideDeletePromoPointModal());
    };

    const handleDelete = () => {
        dispatch(deletePromoPointData(deleteId));
        dispatch(hideDeletePromoPointModal());
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure to delete?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeletePromoPoint;
