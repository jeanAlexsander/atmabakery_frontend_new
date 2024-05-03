import { createSlice } from "@reduxjs/toolkit";

const recipeIngredient = [
    {
      recipe_id: 1,
      ingredient_id: 1,
      total_use: 500,
    },
    {
        recipe_id: 2,
        ingredient_id: 2,
      total_use: 300,
      },
      {
        recipe_id: 3,
        ingredient_id: 3,
        total_use: 100,
      },
  ];


const recipeIngredientSlice = createSlice({
    name: "recipeIngredientStore",
    initialState: {
        updateRecipeIngredientModal: false,
        recipeIngredientData: [...recipeIngredient]
    },
    reducers: {
        showAddRecipeIngredientModal: (state) => {
            state.addRecipeIngredientModal = true;
        },
        hideAddRecipeIngredientModal: (state) => {
            state.addRecipeIngredientModal = false;
        },
        showUpdateRecipeIngredientModal: (state) => {
            state.updateRecipeIngredientModal = true;
        },
        hideUpdateRecipeIngredientModal: (state) => {
            state.updateRecipeIngredientModal = false;
        },
        showDeleteRecipeIngredientModal: (state) => {
            state.deleteRecipeIngredientModal = true;
        },
        hideDeleteRecipeIngredientModal: (state) => {
            state.deleteRecipeIngredientModal = false;
        }
    }
})

export const { showAddRecipeIngredientModal, hideAddRecipeIngredientModal, showUpdateRecipeIngredientModal, hideUpdateRecipeIngredientModal, hideDeleteRecipeIngredientModal, showDeleteRecipeIngredientModal } = recipeIngredientSlice.actions;

export default recipeIngredientSlice;