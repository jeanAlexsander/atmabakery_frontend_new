import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";



const produkSlice = createSlice({
    name: "produkStore",
    initialState: {
        updateProdukModal: false,
        produkData: [],
        addProdukModal: false,
        deleteProdukModal: false,
        categoriesData: [],
        deleteId: null,
        updateData: {}
    },
    reducers: {
        
        showAddProdukModal: (state) => {
            state.addProdukModal = true;
        },
        hideAddProdukModal: (state) => {
            state.addProdukModal = false;
        },
        showUpdateProdukModal: (state) => {
            state.updateProdukModal = true;
        },
        hideUpdateProdukModal: (state) => {
            state.updateProdukModal = false;
        },
        hideDeleteProdukModal: (state) => {
            state.deleteProdukModal = false;
        },
        showDeleteProdukModal: (state) => {
            state.deleteProdukModal = true;
        },
        setProdukData: (state, action) => {
            state.produkData = [...action.payload.data];
        },
        setCategoriesData: (state, action) => {
            state.categoriesData = [...action.payload.data];
        },
        setDeleteProdukId: (state, action) => {
            console.log(action.payload.id);
            state.deleteId = action.payload.id;
        },
        setUpdateData  : (state, action) => {
            console.log(action.payload.data);
            state.updateData = action.payload.data;
        },
        setCancelUpdate: (state) => {
            state.updateData = {};
        }
    }
})


export const fetchProdukData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-product`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            return data.data;        
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setProdukData({data}));
        } catch (error) {
            console.log(error);
        }
    }

}

export const fetchCategorisData = () => {
    return async (dispatch) => {
        async function fetchDataDatabase() {
            const response = await fetch(`${URL}get-categories`)
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await response.json();
            console.log(data);
            return data.data;        
        }

        try {
            const data = await fetchDataDatabase();
            dispatch(setCategoriesData({data}));
        } catch (error) {
            console.log(error);
        }
    }

}

export const addProduk = (formData) => {
    console.log(formData);
    return async (dispatch) => {
        async function addData() {
            const response = await fetch(`${URL}add-product`, {
                method: "POST",
                body: formData,
                'content-type': 'multipart/form-data',
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            return responseData;
        }

        try {
            await addData();
            dispatch(fetchProdukData());
        } catch (error) {
            console.log(error);
        }
    };
}


export const deleteProduk = (id) => {
    return async (dispatch) => {
        async function deleteData() {
            const response = await fetch(`${URL}delete-product/${id}`, {
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
            dispatch(fetchProdukData());
        } catch (error) {
            console.log(error);
        }
    };

}

export const updateProduk = (data) => {
    const id = data.id;
    return async (dispatch) => {
        async function updateData() {
            const response = await fetch(`${URL}update-product/${id}`, {
                method: "POST",
                body: data.formData,
                'content-type': 'multipart/form-data',
            });
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            return responseData;
        }

        try {
            await updateData();
            dispatch(fetchProdukData());
        } catch (error) {
            console.log(error);
        }
    };

}


export const {hideAddProdukModal, hideDeleteProdukModal, hideUpdateProdukModal, showAddProdukModal, showDeleteProdukModal, showUpdateProdukModal, setProdukData, setCategoriesData,setDeleteProdukId, setUpdateData,setCancelUpdate} = produkSlice.actions;

export default produkSlice;