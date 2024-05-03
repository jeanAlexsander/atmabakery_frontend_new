import { createSlice } from "@reduxjs/toolkit";

const Salary = [
    {
      salary_id: 1,
      employee_id: "4",
      salary_amount: "20000000",
      bonus: "150000",
      paid_time: "2024-02-01 11:00:00",
    },
    {
      salary_id: 2,
      employee_id: "5",
      salary_amount: "18000000",
      bonus: "50000",
      paid_time: "2024-02-01 10:59:00",
    },
    {
      salary_id: 3,
      employee_id: "6",
      salary_amount: "15000000",
      bonus: "100000",
      paid_time: "2024-01-09 10:00:00",
    },
  ];


const salarySlice = createSlice({
    name: "salaryStore",
    initialState: {
        updateSalaryModal: false,
        salaryData: [...Salary]
    },
    reducers: {
        showUpdateSalaryModal: (state) => {
            state.updateSalaryModal = true;
        },
        hideUpdateSalaryModal: (state) => {
            state.updateSalaryModal = false;
        }
    }
})

export const { hideUpdateSalaryModal, showUpdateSalaryModal } = salarySlice.actions;

export default salarySlice;