import MOSideBar from "../component/side_nav_bar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import ModalAddPurchaseIngredient from "./addPurchaseIngredientModals";
import ModalUpdatePurchaseIngredient from "./updatePurchaseIngredientModals";
import ModalDeletePurchaseIngredient from "./deletePurchaseIngredientModals";
import { useDispatch, useSelector } from "react-redux";
import {
    showAddPurchaseIngredientModal,
    showUpdatePurchaseIngredientModal,
    showDeletePurchaseIngredientModal,
    fetchPurchaseIngredientsData,
    setDeletePurchaseIngredientId,
    setEditPurchaseIngredientData
} from "../../../store/mo/purchaseIngredient"

const PurchaseIngredientView = () => {
    const initValue = useSelector((state) => state.purchaseIngredientStore.purchaseIngredientData);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPurchaseIngredient, setFilteredPurchaseIngredients] = useState([]);
    const searchRef = useRef(null);
    const inputAmountRef = useRef(null);
    const dispatch = useDispatch();

    let noUrut = 0;


    const handleSearch = () => {
        var lowerCek = searchTerm.toLowerCase();
        const temp = initValue.filter(
            (p) =>
                p.name.toLowerCase().includes(lowerCek) ||
                p.unit.toLowerCase().includes(lowerCek) ||
                String(p.amount).includes(lowerCek) ||
                String(p.price_per_unit).includes(lowerCek) ||
                String(p.total).includes(lowerCek)
        );
        console.log(temp)
        setFilteredPurchaseIngredients(temp);
    };

    useEffect(() => {
        dispatch(fetchPurchaseIngredientsData());
    }, [dispatch]);

    const handleOpenModal = () => {
        dispatch(showAddPurchaseIngredientModal());
    }

    const handleOpenModalUpdate = (purchaseIngredient) => {
        dispatch(setEditPurchaseIngredientData(purchaseIngredient));
        dispatch(showUpdatePurchaseIngredientModal());
    };

    const handleDelete = (id) => {
        console.log(id)
        dispatch(setDeletePurchaseIngredientId({ id }));
        dispatch(showDeletePurchaseIngredientModal());
    };

    const handleEdit = (purchaseIngredient) => {
        dispatch(setEditPurchaseIngredientData({ purchaseIngredient }));
        dispatch(showUpdatePurchaseIngredientModal());
    };

    const calculate = (e, purchaseIngredient) => {
        console.log("update")
        const newValue = e.target.value;
        const updatedIngredients = initValue.map(item => {
            if (item.ingredient_id === purchaseIngredient.ingredient_id) {
                return {
                    ...item,
                    total: newValue * item.price_per_unit
                };
            }
            return item;
        });
        setCek([...updatedIngredients]);
    };



    return (
        <div style={{ display: "flex" }}>
            <MOSideBar />
            <ModalAddPurchaseIngredient />
            <ModalUpdatePurchaseIngredient />
            <ModalDeletePurchaseIngredient />
            <div style={{ width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginLeft: "20px",
                        marginTop: "20px",
                        flex: "1",
                    }}
                >
                    <h4>Purchase Ingredient</h4>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginRight: "20px",
                        }}
                    >
                        <input
                            type="text"
                            className="form-control form-control-sm "
                            placeholder="Search..."
                            style={{ width: "300px", marginRight: "10px" }}
                            ref={searchRef}
                            onChange={(p) => setSearchTerm(p.target.value)}
                        />
                        <Button
                            variant="danger"
                            className="mb-2"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <Button
                    onClick={() => {
                        handleOpenModal();
                    }}
                    variant="success"
                    className="mt-3 "
                    style={{ marginLeft: "20px" }}
                >
                    + Add Ingredient
                </Button>
                <div
                    className="p-4 container-fluid"
                    style={{ overflowY: "auto", flex: "1" }}
                >
                    <div className="card shadow-lg p-4 mb-5 rounded">
                        <div className="card-header mb-3">
                            <h2 className="fw-semibold" style={{ textAlign: "center" }}>
                                Data Purchase Ingredients
                            </h2>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nomor</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Unit</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Price per Unit</th>
                                    <th scope="col">Input </th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(searchTerm ? filteredPurchaseIngredient : initValue).map((p) => {
                                    noUrut += 1
                                    return (
                                        <tr key={p.ingredient_id}>
                                            <td>{noUrut}</td>
                                            <td>{p.name}</td>
                                            <td>{p.unit}</td>
                                            <td>{p.amount}</td>
                                            <td>{p.price_per_unit}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    min={1}
                                                    onChange={(e) => calculate(e, p)}
                                                />
                                            </td>
                                            <td>{p.total}</td>
                                            <td>
                                                <Button
                                                    variant="primary"
                                                    className="me-2 btn-md"
                                                    onClick={() => {
                                                        handleEdit(p);
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    className="btn-md"
                                                    onClick={() => {
                                                        handleDelete(p.ingredient_id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseIngredientView;