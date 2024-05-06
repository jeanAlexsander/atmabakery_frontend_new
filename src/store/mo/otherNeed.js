import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const otherNeedSlice = createSlice({
    name: "otherNeedStore",
    initialState: {
        addOtherNeedModal: false,
        updateOtherNeedModal: false,
        deleteOtherNeedModal: false,
        otherNeedData: [],
        deleteId: null,
        editOtherNeedData: {}
    },

    reducers: {
        showAddOtherNeedModal: (state) => {
            state.addOtherNeedModal = true;
        },
        hideAddOtherNeedModal: (state) => {
            state.addOtherNeedModal = false;
        },
        showUpdateOtherNeedModal: (state) => {
            state.updateOtherNeedModal = true;
        },
        hideUpdateOtherNeedModal: (state) => {
            state.updateOtherNeedModal = false;
        },
        showDeleteOtherNeedModal: (state) => {
            state.deleteOtherNeedModal = true;
        },
        hideDeleteOtherNeedModal: (state) => {
            state.deleteOtherNeedModal = false;
        },
        setOtherNeedData: (state, action) => {
            state.otherNeedData = [...action.payload.data];
        },
        setDeleteOtherNeedId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setEditOtherNeedData: (state, action) => {
            console.log(action.payload.otherNeed);
            state.editOtherNeedData = action.payload.otherNeed;
        },
        setCancelEditOtherNeed: (state) => {
            state.editOtherNeedData = {};
        }
    }
});

export const fetchOtherNeedData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-otherNeed`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setOtherNeedData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const addOtherNeedData = (data) => {
    const inputData = data
    console.log(inputData)

    return async (dispatch) => {
        async function addDataToDatabase() {
            const response = await fetch(`${URL}add-otherNeed`, {
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
            dispatch(fetchOtherNeedData());
            return newData;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
};

export const deleteOtherNeedData = (id) => {
    console.log("akses")
    console.log(id)
    return async (dispatch) => {
        async function deleteDataFromDatabase() {
            const response = await fetch(`${URL}delete-otherNeed/${id}`, {
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
            dispatch(fetchOtherNeedData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateOtherNeedData = (data) => {
    const inputData = data
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(`${URL}update-otherNeed/${inputData.other_need_id}`, {
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
            dispatch(fetchOtherNeedData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const { showAddOtherNeedModal, hideAddOtherNeedModal, hideUpdateOtherNeedModal, showUpdateOtherNeedModal, hideDeleteOtherNeedModal, showDeleteOtherNeedModal, setOtherNeedData, setDeleteOtherNeedId, setEditOtherNeedData, setCancelEditOtherNeed, updateOtherNeedModal } = otherNeedSlice.actions;

export default otherNeedSlice;