import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const recipeSlice = createSlice({
  name: "custodianStore",
  initialState: {
    addRecipeModal: false,
    updateRecipeModal: false,
    deleteRecipeModal: false,
    recipeData: [],
    deleteId: null,
    editRecipeData: {},
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
    },
    setRecipeData: (state, action) => {
      state.recipeData = [...action.payload.data];
    },
    setDeleteRecipeId: (state, action) => {
      state.deleteId = action.payload.id;
    },
    setEditRecipeData: (state, action) => {
      state.editRecipeData = action.payload.recipe;
    },
    setCancelEditRecipe: (state) => {
      state.editRecipeData = {};
    },
  },
});

export const fetchRecipesData = () => {
  return async (dispatch) => {
    async function fetchDataDatabase() {
      const response = await fetch(`${URL}get-recipes_temp`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      return data.data;
    }

    try {
      const data = await fetchDataDatabase();
      dispatch(setRecipeData({ data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addRecipeData = (data) => {
  const inputData = data;

  return async (dispatch) => {
    async function addDataToDatabase() {
      const response = await fetch(`${URL}add-recipes_temp`, {
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
      dispatch(fetchRecipesData());
      return newData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
};

export const deleteRecipeData = (id) => {
  console.log("akses");
  console.log(id);
  return async (dispatch) => {
    async function deleteDataFromDatabase() {
      const response = await fetch(`${URL}delete-recipes-new/${id}`, {
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
      dispatch(fetchRecipesData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateRecipeData = (data) => {
  const inputData = data;
  return async (dispatch) => {
    async function updateDataDatabase() {
      const response = await fetch(
        `${URL}update-recipes_temp/${inputData.recipe_id}`,
        {
          method: "PUT",
          body: JSON.stringify(inputData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      return data;
    }

    try {
      await updateDataDatabase();
      dispatch(fetchRecipesData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const {
  showAddRecipeModal,
  hideAddRecipeModal,
  hideUpdateRecipeModal,
  showUpdateRecipeModal,
  hideDeleteRecipeModal,
  showDeleteRecipeModal,
  setRecipeData,
  setDeleteRecipeId,
  setEditRecipeData,
  setCancelEditRecipe,
} = recipeSlice.actions;

export default recipeSlice;
