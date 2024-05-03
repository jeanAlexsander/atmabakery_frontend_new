import { createSlice } from "@reduxjs/toolkit";

const Recipe = [
    {
      recipe_id: 1,
      product_name: "Kue",
    },
    {
        recipe_id: 2,
        product_name: "Bolu",
      },
      {
        recipe_id: 3,
        product_name: "Minuman",
      },
  ];


const recipeSlice = createSlice({
    name: "recipeStore",
    initialState: {
        updateRecipeModal: false,
        recipeData: [...Recipe]
    },
    reducers: {
        showAddRecipeModal: (state) => {
            state.addRecipeModal = true;
        },
        hideAddRecipeModal: (state) => {
            state.addRecipeModal = false;
        },
        showUpdateRecipeModal: (state) => {
            state.updateRecipeModal = true;
        },
        hideUpdateRecipeModal: (state) => {
            state.updateRecipeModal = false;
        },
        showDeleteRecipeModal: (state) => {
            state.deleteRecipeModal = true;
        },
        hideDeleteRecipeModal: (state) => {
            state.deleteRecipeModal = false;
        }
    }
})

export const { showAddRecipeModal, hideAddRecipeModal, showUpdateRecipeModal, hideUpdateRecipeModal, hideDeleteRecipeModal, showDeleteRecipeModal } = recipeSlice.actions;

export default recipeSlice;