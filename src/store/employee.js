import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants";

const employeeSlice = createSlice({
    name: "employeeStore",
    initialState: {
        addEmployeeModal: false,
        updateEmployeeModal: false,
        deleteEmployeeModal: false,
        employeeData: [],
        deleteId: null,
        role: [],
        editEmployeeData: {}
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
        },
        setEmployeeData: (state, action) => {
            state.employeeData = [...action.payload.data];
        },
        setDeleteId: (state, action) => {
            state.deleteId = action.payload.id;
        },
        setRole: (state, action) => {
            state.role = [...action.payload.role];
        },
        setEditEmployeeData: (state, action) => {
            state.editEmployeeData = action.payload.employee;
        },
        setCancelEditEmployee: (state) => {
            state.editEmployeeData = {};
        }
    }
})


export const fetchEmployeeData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-employees`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setEmployeeData({ data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteEmployeeData = (id) => {
    return async (dispatch) => {
        async function deleteDataDatabase() {
            const response = await fetch(`${URL}delete-employee/${id}`, {
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
            dispatch(fetchEmployeeData());
        } catch (error) {
            console.log(error);
        }
    };
}

export const fetchRoleData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-role`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setRole({ role: data }));
        } catch (error) {
            console.log(error);
        }
    };
};

export const addEmployeeData = (data) => {
    const inputData = data
    return async (dispatch) => {
        async function addDataDatabase() {
            const response = await fetch(`${URL}add-employee`, {
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
            await addDataDatabase();
            dispatch(fetchEmployeeData());
        } catch (error) {
            console.log(error);
        }
    };

}

export const updateEmployeeData = (data) => {
    const inputData = data
    return async (dispatch) => {
        async function updateDataDatabase() {
            const response = await fetch(`${URL}update-employee/${inputData.user_id}`, {
                method: "PUT",
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
            dispatch(fetchEmployeeData());
        } catch (error) {
            console.log(error);
        }
    };
}


export const { showAddEmployeeModal, hideAddEmployeeModal, hideUpdateEmployeeModal, showUpdateEmployeeModal, hideDeleteEmployeeModal, showDeleteEmployeeModal, setEmployeeData, setDeleteId, setRole, setEditEmployeeData, setCancelEditEmployee } = employeeSlice.actions;

export default employeeSlice;