import { createSlice } from "@reduxjs/toolkit";

const Ingredient = [
    {
      id: 1,
      name: "Butter",
      unit: "Kilogram",
      amount: "2",
    },
    {
        id: 2,
        name: "Sugar",
        unit: "gram",
        amount: "100",
    },
    {
        id: 3,
        name: "Chocolate",
        unit: "gram",
        amount: "1000",
    },
  ];


const ingredientSlice = createSlice({
    name: "ingredientStore",
    initialState: {
        addIngredientModal: false,
        updateIngredientModal: false,
        deleteIngredientModal: false,
        ingredientData: [...Ingredient]
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
        }
    }
})

export const { showAddIngredientModal, hideAddIngredientModal, hideUpdateIngredientModal, showUpdateIngredientModal, hideDeleteIngredientModal, showDeleteIngredientModal } = ingredientSlice.actions;

export default ingredientSlice;