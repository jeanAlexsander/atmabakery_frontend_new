import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const purchaseIngredientSlice = createSlice({
    name: "purchaseIngredientStore",
    initialState: {
        addPurchaseIngredientModal: false,
        updatePurchaseIngredientModal: false,
        deletePurchaseIngredientModal: false,
        purchaseIngredientData: [],
        deleteId: null,
        editPurchaseIngredientData: {},
        dataIngredient: []
    },
    reducers: {
        showAddPurchaseIngredientModal: (state) => {
            state.addPurchaseIngredientModal = true;
        },
        hideAddPurchaseIngredientModal: (state) => {
            state.addPurchaseIngredientModal = false;
        },
        showUpdatePurchaseIngredientModal: (state) => {
            state.updatePurchaseIngredientModal = true;
        },
        hideUpdatePurchaseIngredientModal: (state) => {
            state.updatePurchaseIngredientModal = false;
        },
        showDeletePurchaseIngredientModal: (state) => {
            state.deletePurchaseIngredientModal = true;
        },
        hideDeletePurchaseIngredientModal: (state) => {
            state.deletePurchaseIngredientModal = false;
        },
        setPurchaseIngredientData: (state, action) => {
            state.purchaseIngredientData =[... action.payload.data];
        },
        setDeletePurchaseIngredientId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setEditPurchaseIngredientData: (state, action) => {
            console.log(action.payload.purchaseIngredient);
            state.editPurchaseIngredientData = action.payload.purchaseIngredient;
        },
        setCancelEditPurchaseIngredient: (state) => {
            state.editPurchaseIngredientData = {};
        },
        setDataIngredient: (state, action) => {
            state.dataIngredient = [...action.payload.data];
        }
    }
});

export const fetchPurchaseIngredientsData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-purchase-ingredient`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setPurchaseIngredientData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchPurchaseIngredientsModal = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-purchaseIngredients`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setDataIngredient({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};


export const addDataToPurchaseIngredent = (data) => {
    const inputData = data;
    console.log(inputData)
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}add-purchase-ingredient`, {
                method: "POST",
                body: JSON.stringify(inputData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            await fetchDataDatabase();
            dispatch(fetchPurchaseIngredientsData());
        } catch (error) {
            console.log(error);
        }
    };
}

export const addPurchaseIngredientData = (data) => {
    const inputData = data

    return async (dispatch) => {
        async function addDataToDatabase() {
            const response = await fetch(`${URL}add-purchaseIngredients`, {
                method: "POST",
                body: JSON.stringify(inputData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            return responseData.data;
        }

        try {
            const newData = await addDataToDatabase();
            dispatch(fetchPurchaseIngredientsData());
            return newData;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
};

export const deletePurchaseIngredientData = (id) => {
    console.log("akses")
    console.log(id)
    return async (dispatch) => {
        async function deleteDataFromDatabase() {
            const response = await fetch(`${URL}delete-purchase-ingredient/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            return responseData.data;
        }

        try {
            await deleteDataFromDatabase();
            dispatch(fetchPurchaseIngredientsData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const updatePurchaseIngredientData = (data) => {
    const inputData = data
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(`${URL}update-purchase-ingredient/${inputData.purchase_id}`, {
                method: "PUT",
                body: JSON.stringify(inputData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data;
        }

        try {
            await updateDataDatabase();
            dispatch(fetchPurchaseIngredientsData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const { showAddPurchaseIngredientModal, hideAddPurchaseIngredientModal, hideUpdatePurchaseIngredientModal, showUpdatePurchaseIngredientModal, hideDeletePurchaseIngredientModal, showDeletePurchaseIngredientModal, setPurchaseIngredientData, setDeletePurchaseIngredientId, setEditPurchaseIngredientData, setCancelEditPurchaseIngredient, setDataIngredient } = purchaseIngredientSlice.actions;

export default purchaseIngredientSlice;