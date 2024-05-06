import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
    hideUpdatePromoPointModal,
    setCancelEditPromoPoint,
    updatePromoPointData,
} from "../../../store/admin/promoPoint";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdatePromoPoint() {
    const show = useSelector((state) => state.promoPointStore.updatePromoPointModal);
    const data = useSelector((state) => state.promoPointStore.editPromoPointData);

    const total_pointRef = useRef(null);

    useEffect(() => {
        console.log(data);
        if (data) {
            if (total_pointRef.current) {
                total_pointRef.current.value = data.total_point;
            }
        }
    }, [data]);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setCancelEditPromoPoint());
        dispatch(hideUpdatePromoPointModal());
    };

    const handleSaveChanges = () => {
        const updatedPromoPoint = {
            id: data.user_id,
            total_point: total_pointRef.current.value,
        };

        dispatch(updatePromoPointData(updatedPromoPoint));

        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Promo Point</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Group className="mb-3" controlId="formTotalPoint">
                                <Form.Label>Total Point</Form.Label>
                                <Form.Control type="text" ref={total_pointRef} required />
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdatePromoPoint;
