import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants";

const ingredientSlice = createSlice({
    name: "ingredientStore",
    initialState: {
        addIngredientModal: false,
        updateIngredientModal: false,
        deleteIngredientModal: false,
        ingredientData: [],
        deleteId: null,
        editIngredientData: {}
    },
    reducers: {
        showAddIngredientModal: (state) => {
            state.addIngredientModal = true;
        },
        hideAddIngredientModal: (state) => {
            state.addIngredientModal = false;
        },
        showUpdateIngredientModal: (state) => {
            state.updateIngredientModal = true;
        },
        hideUpdateIngredientModal: (state) => {
            state.updateIngredientModal = false;
        },
        showDeleteIngredientModal: (state) => {
            state.deleteIngredientModal = true;
        },
        hideDeleteIngredientModal: (state) => {
            state.deleteIngredientModal = false;
        },
        setIngredientData: (state, action) => {
            state.ingredientData = [...action.payload.data];
        },
        setDeleteIngredientId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setEditIngredientData: (state, action) => {
            console.log(action.payload.ingredient);
            state.editIngredientData = action.payload.ingredient;
        },
        setCancelEditIngredient: (state) => {
            state.editIngredientData = {};
        },
        
    }
});

export const fetchIngredientsData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-ingredients`);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            console.log(data)
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setIngredientData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const addIngredientData = (data) => {
    const inputData = data

    return async (dispatch) => {
        async function addDataToDatabase() {
            const response = await fetch(`${URL}add-ingredients`, {
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
            dispatch(fetchIngredientsData());
            return newData;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
};

export const deleteIngredientData = (id) => {
    console.log("akses")
    console.log(id)
    return async (dispatch) => {
        async function deleteDataFromDatabase() {
            const response = await fetch(`${URL}delete-ingredients/${id}`, {
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
            dispatch(fetchIngredientsData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const updateIngredientData = (data) => {
    const inputData = data
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(`${URL}update-ingredients/${inputData.ingredient_id}`, {
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
            dispatch(fetchIngredientsData());
        } catch (error) {
            console.log(error);
        }
    };
};

export const { showAddIngredientModal, hideAddIngredientModal, hideUpdateIngredientModal, showUpdateIngredientModal, hideDeleteIngredientModal, showDeleteIngredientModal, setIngredientData, setDeleteIngredientId, setEditIngredientData, setCancelEditIngredient } = ingredientSlice.actions;

export default ingredientSlice;