import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const hampersSlice = createSlice({
  name: "hampersStore",
  initialState: {
    updateHampersModal: false,
    hampersData: [],
    addHampersModal: false,
    deleteHampersModal: false,
    deleteId: null,
    editHampersData: null,
  },
  reducers: {
    showAddHampersModal: (state) => {
      state.addHampersModal = true;
    },
    hideAddHampersModal: (state) => {
      state.addHampersModal = false;
    },
    showUpdateHampersModal: (state) => {
      state.updateHampersModal = true;
    },
    hideUpdateHampersModal: (state) => {
      state.updateHampersModal = false;
    },
    showDeleteHampersModal: (state) => {
      state.deleteHampersModal = true;
    },
    hideDeleteHampersModal: (state) => {
      state.deleteHampersModal = false;
    },
    setHampersData: (state, action) => {
      state.hampersData = [...action.payload.data];
    },
    setDeleteHamperId: (state, action) => {
      console.log(action.payload.id);
      state.deleteId = action.payload.id;
    },
    setEditHampersData: (state, action) => {
      console.log(action.payload.hampers);
      state.editHampersData = action.payload.hampers;
    },
  },
});

export const fetchHampersData = () => {
  return async (dispatch) => {
    async function fetchDataDatabase() {
      const response = await fetch(`${URL}get-hampers`);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data.data);
      return data.data;
    }

    try {
      const data = await fetchDataDatabase();
      dispatch(setHampersData({ data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteHampers = (id) => {
  console.log(`${URL}delete-hampers/${id}`);
  return async (dispatch) => {
    async function deleteData() {
      const response = await fetch(`${URL}delete-hampers/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      return data;
    }

    try {
      await deleteData();
      dispatch(fetchHampersData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const addHampers = (data) => {
  return async (dispatch) => {
    async function addData() {
      const response = await fetch(`${URL}add-hampers`, {
        method: "POST",
        body: data,
        "content-type": "multipart/form-data",
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      console.log(responseData);
      return responseData;
    }

    try {
      await addData();
      //   dispatch(fetchHampersData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateHampers = (data) => {
  console.log(data);
  return async (dispatch) => {
    async function updateData() {
      const response = await fetch(`${URL}update-hampers/${data.id}`, {
        method: "POST",
        body: data.formData,
        "content-type": "multipart/form-data",
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      return responseData;
    }

    try {
      await updateData();
      dispatch(fetchHampersData());
    } catch (error) {
      console.log(error);
    }
  };
};

export const {
  showAddHampersModal,
  hideAddHampersModal,
  showUpdateHampersModal,
  hideUpdateHampersModal,
  hideDeleteHampersModal,
  showDeleteHampersModal,
  setHampersData,
  setDeleteHamperId,
  setEditHampersData,
} = hampersSlice.actions;

export default hampersSlice;
