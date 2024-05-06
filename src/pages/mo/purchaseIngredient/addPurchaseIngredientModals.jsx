import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { addPurchaseIngredientData, hideAddPurchaseIngredientModal } from "../../../store/mo/purchaseIngredient";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

function ModalAddPurchaseIngredient() {
    const show = useSelector((state) => state.purchaseIngredientStore.addPurchaseIngredientModal);
    const nameRef = useRef(null)
    const unitRef = useRef(null)
    const amountRef = useRef(null)
    const price_per_unitRef = useRef(null)
    const totalRef = useRef(null)

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideAddPurchaseIngredientModal());
    };

    const handleSave = () => {
        const data = {
            name: nameRef.current.value,
            unit: unitRef.current.value,
            amount: amountRef.current.value,
            price_per_unit: price_per_unitRef.current.value,
            total: totalRef.current.value
        }
        dispatch(addPurchaseIngredientData(data))
        dispatch(hideAddPurchaseIngredientModal())
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Purchase Ingredient</Modal.Title>
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Amount" autoFocus ref={amountRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>price per unit</Form.Label>
                            <Form.Control type="text" placeholder="enter price per unit" autoFocus ref={price_per_unitRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                            <Form.Label>total</Form.Label>
                            <Form.Control type="text" placeholder="total" autoFocus ref={totalRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddPurchaseIngredient;