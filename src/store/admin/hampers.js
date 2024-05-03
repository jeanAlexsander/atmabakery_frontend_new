import { createSlice } from "@reduxjs/toolkit";

const hampers = [
    {
      hampers_id: 1,
      name: "Paket C",
      image: "",
      hampers_status: "A",
    },
    {
      hampers_id: 2,
      name: "Paket B",
      image: "",
      hampers_status: "B",
      },
      {
      hampers_id: 3,
      name: "Paket C",
      image: "",
      hampers_status: "C",
      },
  ];


const hampersSlice = createSlice({
    name: "hampersStore",
    initialState: {
        updateHampersModal: false,
        hampersData: [...hampers],
        addHampersModal: false,
        deleteHampersModal: false
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
        }
    }
})

export const { showAddHampersModal, hideAddHampersModal, showUpdateHampersModal, hideUpdateHampersModal, hideDeleteHampersModal, showDeleteHampersModal } = hampersSlice.actions;

export default hampersSlice;