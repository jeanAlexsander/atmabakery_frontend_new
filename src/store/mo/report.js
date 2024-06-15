import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";

const reportSlice = createSlice({
  name: "reportStore",
  initialState: {
    data: [],
    dataInputPerProduct: [],
    dataIngredients: [],
    dataIngredientsPerPeriode: [],
    dataPemasukanPengeluaran: [],
    employeeAttendanceSalaryData: [],
  },
  reducers: {
    setDataReport: (state, action) => {
      state.data = [...action.payload.data];
    },
    setDataReportPerProduct: (state, action) => {
      state.dataInputPerProduct = [...action.payload.data];
    },
    setDataIngredientsReport: (state, action) => {
      state.dataIngredients = [...action.payload.data];
    },
    setDataIngredientsPerPeriode: (state, action) => {
      state.dataIngredientsPerPeriode = [...action.payload.data];
    },
    setDataPemasukanPengeluaran: (state, action) => {
      state.dataPemasukanPengeluaran = action.payload.data;
    },
    setEmployeeAttendanceSalaryData: (state, action) => {
      state.employeeAttendanceSalaryData = [...action.payload.data];
    },
  },
});

export const fetchDataReport = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-laporan");
        const data = await response.json();
        return data.data;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch data report");
      }
    };

    try {
      const data = await fetchData();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const dataReport = monthNames.map((monthName, index) => {
        const monthData = data.find((item) => item.month === index + 1);
        return {
          name: monthName,
          pv: monthData ? monthData.total : 0,
          total_order: monthData ? monthData.total_order : 0,
        };
      });

      dispatch(setDataReport({ data: dataReport }));
    } catch (err) {
      console.log(err.message);
      // Handle error here
    }
  };
};

export const fetchDataReportPerProduct = (data) => {
  const dataInput = data;
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            month: dataInput,
            year: "2024",
          }),
        });
        const data = await response.json();
        console.log(data.data);
        return data.data;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      const data = await fetchData();
      dispatch(setDataReportPerProduct({ data: data }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchIngredients = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-ingredient");
        const data = await response.json();
        console.log(data.data);
        return data.data;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      const data = await fetchData();
      dispatch(setDataIngredientsReport({ data: data }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchIngredientsPerPeriode = (data) => {
  const dataInput = data;
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-ingredient-per-periode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            month: dataInput,
            year: 2024,
          }),
        });
        const data = await response.json();
        console.log(data.data);
        return data.data;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      const data = await fetchData();
      dispatch(setDataIngredientsPerPeriode({ data: data }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDataPengeluaranPemasukan = (data) => {
  const dataInput = data;
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL + "get-pemasukan-pengeluaran", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            month: dataInput,
            year: 2024,
          }),
        });
        const data = await response.json();
        console.log(data.data);
        return data.data;
      } catch (err) {
        console.log(err);
      }
    };
    try {
      const data = await fetchData();
      dispatch(setDataPemasukanPengeluaran({ data: data }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchEmployeeAttendanceSalary = (data) => {
  const inputData = data;
  return async (dispatch) => {
    async function fetchDataDatabase() {
      const response = await fetch(URL + "get-employee-salary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          month: inputData,
          year: 2024,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      return data.data;
    }

    try {
      const data = await fetchDataDatabase();
      dispatch(setEmployeeAttendanceSalaryData({ data }));
    } catch (error) {
      console.error(error);
    }
  };
};

const {
  setDataReport,
  setDataReportPerProduct,
  setDataIngredientsReport,
  setDataIngredientsPerPeriode,
  setDataPemasukanPengeluaran,
  setEmployeeAttendanceSalaryData,
} = reportSlice.actions;

export default reportSlice;
