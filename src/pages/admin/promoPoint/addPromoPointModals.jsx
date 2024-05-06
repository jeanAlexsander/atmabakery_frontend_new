import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideAddPromoPointModal, addPromoPointData } from "../../../store/admin/promoPoint";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalAddPromoPoint() {
    const show = useSelector((state) => state.promoPointStore.addPromoPointModal);
    const data = useSelector((state) => state.promoPointStore.setAddPromoPoint);
    const total_pointRef = useRef(null);

    const dispatch = useDispatch();

    const handleSave = () => {
        const total_point = total_pointRef.current.value;

        const dataInput = {
            id: data.user_id,
            total_point: total_point,
        };
        dispatch(addPromoPointData(dataInput));
        handleClose();
    };

    const handleClose = () => {
        dispatch(hideAddPromoPointModal());
    };


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Point</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Point</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="enter Point"
                                autoFocus
                                ref={total_pointRef}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSave();
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddPromoPoint;
