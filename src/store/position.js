import { createSlice } from "@reduxjs/toolkit";

const Position = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      role_position: "Kitchen",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      role_position: "Packaging",
    },
    {
      id: 3,
      first_name: "James",
      last_name: "Doe",
      role_position: "OB",
    },
  ];


const positionSlice = createSlice({
    name: "positionStore",
    initialState: {
        addPositionModal: false,
        updatePositionModal: false,
        deletePositionModal: false,
        positionData: [...Position]
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
        }
    }
})

export const { showAddPositionModal, hideAddPositionModal, hideUpdatePositionModal, showUpdatePositionModal, hideDeletePositionModal, showDeletePositionModal } = positionSlice.actions;

export default positionSlice;