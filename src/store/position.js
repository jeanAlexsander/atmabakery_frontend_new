import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants";

const positionSlice = createSlice({
    name: "positionStore",
    initialState: {
        addPositionModal: false,
        updatePositionModal: false,
        deletePositionModal: false,
        positionData: [],
        deleteId: null,
        position: [],
        editPositionData: {},
        positionDataDB: []
    },
    reducers: {
        showAddPositionModal: (state) => {
            state.addPositionModal = true;
        },
        hideAddPositionModal: (state) => {
            state.addPositionModal = false;
        },
        showUpdatePositionModal: (state) => {
            state.updatePositionModal = true;
        },
        hideUpdatePositionModal: (state) => {
            state.updatePositionModal = false;
        },
        showDeletePositionModal: (state) => {
            state.deletePositionModal = true;
        },
        hideDeletePositionModal: (state) => {
            state.deletePositionModal = false;
        },
        setPositionData: (state, action) => {
            state.positionData = [...action.payload.data];
        },
        setDeleteId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setEditPositionData: (state, action) => {
            console.log(action.payload.position);
            state.editPositionData = action.payload.position;
        },
        setPositionDataDB: (state, action)=>{
            state.positionDataDB = [...action.payload.data]
        }
    }
})

export const fetchPositionData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-position`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            console.log(data)
            return data.data;        
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setPositionData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const deletePositionData = (id) => {
    return async (dispatch) => {
        async function deleteDataDatabase() {
            const response = await fetch(`${URL}delete-position/${id}`, {
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
            dispatch(fetchPositionData());
        } catch (error) {
            console.log(error);
        }
    };

};

export const addPositionData = (data) => {
    const inputData = data
    const dataAdd = {
        'position_id' : inputData.position_id
    }
    return async (dispatch) => {
        async function addDataDatabase() {
            const response = await fetch(`${URL}add-position/${inputData.id}`, {
                method: "POST",
                body: JSON.stringify(dataAdd),
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
            dispatch(fetchPositionData());
        } catch (error) {
            console.log(error);
        }
    };

};

export const getDataPosition = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}fetch-position`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            console.log(data)
            return data.data;        
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setPositionDataDB({ data }));
        } catch (error) {
            console.log(error);
        }
    };
}

export const updatePositionData = (data) => {
    const inputData = data
    const dataAdd = {
        'position_id' : inputData.position_id
    }
    return async (dispatch) => {
        async function addDataDatabase() {
            const response = await fetch(`${URL}add-position/${inputData.id}`, {
                method: "POST",
                body: JSON.stringify(dataAdd),
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
            dispatch(fetchPositionData());
        } catch (error) {
            console.log(error);
        }
    };

};

export const { showAddPositionModal, hideAddPositionModal, hideUpdatePositionModal, showUpdatePositionModal, hideDeletePositionModal, showDeletePositionModal, setPositionData, setDeleteId, setEditPositionData, setPositionDataDB} = positionSlice.actions;

export default positionSlice;