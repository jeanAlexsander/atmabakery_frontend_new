import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const custodianSlice = createSlice({
    name: "custodianStore",
    initialState: {
        addCustodianModal: false,
        updateCustodianModal: false,
        deleteCustodianModal: false,
        custodianData: [],
        deleteId: null,
        editCustodianData: {}
    },

    reducers: {
        showAddCustodianModal: (state) => {
            state.addCustodianModal = true;
        },
        hideAddCustodianModal: (state) => {
            state.addCustodianModal = false;
        },
        showUpdateCustodianModal: (state) => {
            state.updateCustodianModal = true;
        },
        hideUpdateCustodianModal: (state) => {
            state.updateCustodianModal = false;
        },
        showDeleteCustodianModal: (state) => {
            state.deleteCustodianModal = true;
        },
        hideDeleteCustodianModal: (state) => {
            state.deleteCustodianModal = false;
        },
        setCustodianData: (state, action) => {
            state.custodianData = [...action.payload.data];
        },
        setDeleteCustodianId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setEditCustodianData: (state, action) => {
            state.editCustodianData = action.payload.custodian;
        },
        setCancelEditCustodian: (state) => {
            state.editCustodianData = {};
        }
    }
});

export const fetchCustodiansData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-custodians`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setCustodianData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const addCustodianData = (data) => {
    const inputData = data

    return async (dispatch) => {
        async function addDataToDatabase() {
            const response = await fetch(`${URL}add-custodians`, {
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
            dispatch(fetchCustodiansData());
            return newData;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
};

export const deleteCustodianData = (id) => {
    console.log("akses")
    console.log(id)
    return async (dispatch) => {
        async function deleteDataFromDatabase() {
            const response = await fetch(`${URL}delete-custodians/${id}`, {
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
            dispatch(fetchCustodiansData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateCustodianData = (data) => {
    const inputData = data
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(`${URL}update-custodians/${inputData.custodian_id}`, {
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
            return data;
        }

        try {
            await updateDataDatabase();
            dispatch(fetchCustodiansData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const {
    showAddCustodianModal,
    hideAddCustodianModal,
    hideUpdateCustodianModal,
    showUpdateCustodianModal,
    hideDeleteCustodianModal,
    showDeleteCustodianModal,
    setCustodianData,
    setDeleteCustodianId,
    setEditCustodianData,
    setCancelEditCustodian,
} = custodianSlice.actions;

export default custodianSlice;
