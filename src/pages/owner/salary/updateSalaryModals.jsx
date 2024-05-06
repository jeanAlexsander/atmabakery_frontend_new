import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchSalaryData, hideUpdateSalaryModal, setCancelSalaryData, updateSalaryData } from "../../../store/owner/salary";
import { useEffect, useRef } from "react";

function ModalUpdateSalary() {
  const show = useSelector((state) => state.salaryStore.updateSalaryModal);
  const data = useSelector((state) => state.salaryStore.updateSalarydata);


  const salaryAmountRef = useRef(null);
  const bonusRef = useRef(null);

  useEffect(() => {
    if(data) {
      if(salaryAmountRef.current){
        salaryAmountRef.current.value = data.salary_amount;
      }
      if(bonusRef.current){
        bonusRef.current.value = data.bonus;
      }
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideUpdateSalaryModal());
    dispatch(setCancelSalaryData());
  };

  const handleSaveChanges = () => {
    const updatedSalary = {
      salary_id: data.salary_id,
      bonus: bonusRef.current.value,
      salary_amount: salaryAmountRef.current.value,
    };

    dispatch(updateSalaryData(updatedSalary));

    handleClose();
  };
  



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Salary Amount</Form.Label>
              <Form.Control as="textarea" rows={3} ref={salaryAmountRef} required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Bonus</Form.Label>
              <Form.Control as="textarea" rows={3} ref={bonusRef} required />
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

export default ModalUpdateSalary;
