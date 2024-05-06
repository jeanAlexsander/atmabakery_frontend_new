import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { deletePurchaseIngredientData, hideDeletePurchaseIngredientModal } from "../../../store/mo/purchaseIngredient";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDeletePurchaseIngredient() {
    const show = useSelector((state) => state.purchaseIngredientStore.deletePurchaseIngredientModal);
    const deleteId = useSelector((state) => state.purchaseIngredientStore.deleteId);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideDeletePurchaseIngredientModal());
    };

    const handleDelete = () => {
        dispatch(deletePurchaseIngredientData(deleteId));
        dispatch(hideDeletePurchaseIngredientModal());
    }

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

export default ModalDeletePurchaseIngredient;

