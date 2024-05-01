import { createSlice } from "@reduxjs/toolkit";

const Employee = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@gmail.com",
      role_name: "Manager",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@gmail.com",
      role_name: "Staff",
    },
    {
      id: 3,
      first_name: "James",
      last_name: "Doe",
      email: "james@gmail.com",
      role_name: "Staff",
    },
  ];


const employeeSlice = createSlice({
    name: "employeeStore",
    initialState: {
        addEmployeeModal: false,
        updateEmployeeModal: false,
        deleteEmployeeModal: false,
        employeeData: [...Employee]
    },
    reducers: {
        showAddEmployeeModal: (state) => {
            state.addEmployeeModal = true;
        },
        hideAddEmployeeModal: (state) => {
            state.addEmployeeModal = false;
        },
        showUpdateEmployeeModal: (state) => {
            state.updateEmployeeModal = true;
        },
        hideUpdateEmployeeModal: (state) => {
            state.updateEmployeeModal = false;
        },
        showDeleteEmployeeModal: (state) => {
            state.deleteEmployeeModal = true;
        },
        hideDeleteEmployeeModal: (state) => {
            state.deleteEmployeeModal = false;
        }
    }
})

export const { showAddEmployeeModal, hideAddEmployeeModal, hideUpdateEmployeeModal, showUpdateEmployeeModal, hideDeleteEmployeeModal, showDeleteEmployeeModal } = employeeSlice.actions;

export default employeeSlice;