import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const promoPointSlice = createSlice({
    name: "promoPointStore",
    initialState: {
        addPromoPointModal: false,
        updatePromoPointModal: false,
        deletePromoPointModal: false,
        promoPointData: [],
        deleteId: null,
        editPromoPointData: {},
        setAddPromoPoint: {}
    },
    reducers: {
        showAddPromoPointModal: (state) => {
            state.addPromoPointModal = true;
        },
        hideAddPromoPointModal: (state) => {
            state.addPromoPointModal = false;
        },
        showUpdatePromoPointModal: (state) => {
            state.updatePromoPointModal = true;
        },
        hideUpdatePromoPointModal: (state) => {
            state.updatePromoPointModal = false;
        },
        showDeletePromoPointModal: (state) => {
            state.deletePromoPointModal = true;
        },
        hideDeletePromoPointModal: (state) => {
            state.deletePromoPointModal = false;
        },
        setPromoPointData: (state, action) => {
            state.promoPointData = [...action.payload.data];
        },
        setDeleteId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setEditPromoPointData: (state, action) => {
            state.editPromoPointData = action.payload.promoPoint;
        },
        setCancelEditPromoPoint: (state) => {
            state.editPromoPointData = {};
        },
        setAddPromo: (state, action) => {
            console.log(action.payload.data)
            state.setAddPromoPoint = action.payload.data;
        }
    }
})


export const fetchPromoPointData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-promoPoint`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setPromoPointData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const deletePromoPointData = (id) => {
    return async (dispatch) => {
        async function deleteDataDatabase() {
            const response = await fetch(`${URL}delete-promoPoint/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data;
        }

        try {
            await deleteDataDatabase();
            dispatch(fetchPromoPointData());
        } catch (error) {
            console.log(error);
        }
    };
}

export const addPromoPointData = (data) => {
    const inputData = { total_point: data.total_point }
    const id = data.id
    return async (dispatch) => {
        async function addDataDatabase() {
            const response = await fetch(`${URL}add-promoPoint/${id}`, {
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
            await addDataDatabase();
            dispatch(fetchPromoPointData());
        } catch (error) {
            console.log(error);
        }
    };

}

export const updatePromoPointData = (data) => {
    const inputData = { total_point: data.total_point }
    const id = data.id
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(`${URL}update-promoPoint/${id}`, {
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
            dispatch(fetchPromoPointData());
        } catch (error) {
            console.log(error);
        }
    };
}


export const { showAddPromoPointModal, hideAddPromoPointModal, hideUpdatePromoPointModal, showUpdatePromoPointModal, hideDeletePromoPointModal, showDeletePromoPointModal, setPromoPointData, setDeleteId, setEditPromoPointData, setCancelEditPromoPoint, setAddPromo } = promoPointSlice.actions;

export default promoPointSlice;