import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { hideUpdatePurchaseIngredientModal, setCancelEditPurchaseIngredient, updatePurchaseIngredientData } from "../../../store/mo/purchaseIngredient";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalUpdatePurchaseIngredient() {
    const show = useSelector((state) => state.purchaseIngredientStore.updatePurchaseIngredientModal);
    const data = useSelector((state) => state.purchaseIngredientStore.editPurchaseIngredientData);

    const nameRef = useRef(null)
    const unitRef = useRef(null)
    const amountRef = useRef(null)
    const price_per_unitRef = useRef(null)
    const totalRef = useRef(null)

    useEffect(() => {
        console.log(data);
        if (data) {
            if (nameRef.current) {
                nameRef.current.value = data.name;
            }
            if (unitRef.current) {
                unitRef.current.value = data.unit;
            }
            if (amountRef.current) {
                amountRef.current.value = data.amount;
            }
            if (price_per_unitRef.current) {
                price_per_unitRef.current.value = data.price_per_unit;
            }
            if (totalRef.current) {
                totalRef.current.value = data.total;
            }
        }
    }, [data]);

    const dispatch = useDispatch();

    const handelClose = () => {
        dispatch(hideUpdatePurchaseIngredientModal());
        dispatch(setCancelEditPurchaseIngredient())
    };

    const handleSaveChanges = () => {
        const updatePurchaseIngredient = {
            ingredient_id: data.ingredient_id,
            name: nameRef.current.value,
            unit: unitRef.current.value,
            amount: amountRef.current.value,
            price_per_unit: price_per_unitRef.current.value,
            total: totalRef.current.value,
        };

        dispatch(updatePurchaseIngredientData(updatePurchaseIngredient));

        handelClose();
    }

    return (
        <>
            <Modal show={show} onHide={handelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Purchase Ingredient</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="enter Name" autoFocus ref={nameRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control type="text" placeholder="enter Unit" autoFocus ref={unitRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Amount" autoFocus ref={amountRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>price per unit</Form.Label>
                            <Form.Control type="text" placeholder="enter price per unit" autoFocus ref={price_per_unitRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Total</Form.Label>
                            <Form.Control type="text" placeholder="Total" autoFocus ref={totalRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handelClose}>
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

export default ModalUpdatePurchaseIngredient;