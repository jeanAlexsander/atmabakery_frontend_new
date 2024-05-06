import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const salarySlice = createSlice ({
    name: "salaryStore",
    initialState: {
      setEditSalaryData: false,
      updateSalaryModal: false,
      salaryData: [],
      updateSalarydata: {}
    },
    reducers: {
      setSalaryData: (state, action) => {
        state.salaryData = [...action.payload.data];
      },
      setEditSalaryData: (state, action) => {
        state.setEditSalaryData = action.payload.salary;
      },
      showUpdateSalaryModal: (state) => {
        state.updateSalaryModal = true;
      },
      hideUpdateSalaryModal: (state) => {
          state.updateSalaryModal = false;
      },
      setUpdateSalaryData: (state, action) =>{
        state.updateSalarydata = action.payload.data;
      },
      setCancelSalaryData: (state) => {
        state.updateSalarydata = {};
      }
    }
})

export const fetchSalaryData = () => {
  return async (dispatch) => {
    async function fetchDataDatabase() {
      const response = await fetch(`${URL}get-salary`)
      if (!response.ok){
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      return data.data;
    }

    try{
      const data = await fetchDataDatabase();
      dispatch(setSalaryData({ data }));
    } catch (error) {
      console.log(error);
    }
  }
}

export const updateSalaryData = (data) => {
  const inputData = data.salary_id
  const dataAdd = {
    'salary_amount' : data.salary_amount,
    'bonus'         : data.bonus
  }
  return async (dispatch) => {
    async function updateDataDatabase() {
      const response = await fetch(`${URL}update-salary/${inputData}`, {
        method: "PUT",
        body: JSON.stringify(dataAdd),
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
      dispatch(fetchSalaryData());
    } catch (error) {
      console.log(error);
    }
  };
};


export const { hideUpdateSalaryModal, showUpdateSalaryModal, setEditSalaryData, setSalaryData, setUpdateSalaryData, setCancelSalaryData } = salarySlice.actions;

export default salarySlice;