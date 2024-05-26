import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../../constants";
import { TrySharp } from "@mui/icons-material";


const productViewSlice = createSlice({
    name: "productViewStore",
    initialState: {
        productData: [],
        readyStockData: [],
        totalPoint: 0,
        totalPrice: 0,
        showModalConfirmBuy: false,
        setShowToast: 0,
        deliveryOption: 'atma bakery'
    },
    reducers: {
        setProductViewData: (state, action) => {
            const data = action.payload.data.map((item) => { return { ...item, count: 0 } });
            state.productData = [...data];
        },
        setReadyProductViewData: (state, action) => {
            state.readyStockData = [...action.payload.data];
        },
        setAddCountProductData: (state, action) => {
            state.productData = state.productData.map((item) => {
                if (item.product_id === action.payload.id) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            console.log(state.productData);
        },
        
        setMinCountProductData: (state, action) => {
            state.productData = state.productData.map((item) => {
                if (item.product_id === action.payload.id) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            });
        },
        setDeleteCountProductData: (state, action) => {
            console.log("sudah masuk")
            state.productData = state.productData.map((item) => {
                if (item.product_id === action.payload.id) {
                    return { ...item, count: 0 };
                }
                return item;
            });
        },
        setTotalPoint: (state, action) => {
            state.totalPoint = action.payload.point;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload.price;
        },
        setShowModalConfirmBuy: (state) => {
            state.showModalConfirmBuy = true;
        },
        setHideModalConfirmBuy: (state) => {
            state.showModalConfirmBuy = false;
        },
        setSuccesToast: (state) => {
            state.setShowToast = 1;
        },  
        setFailedToast: (state) => {
            state.setShowToast = 2;
        },
        setNetralToast: (state) => {
            state.setShowToast = 0;
        },
        setDeliveryOptionData: (state, action) => {
            state.deliveryOption = action.payload.option;
        },
        setCancelDelyveryOption: (state) => {
            state.deliveryOption = 'atma bakery';
        }      
    }
});

export const fetchProductViewData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const respose = await fetch(URL + "get-product-information");
            const data = await respose.json();
            return data.data;
        }

        try{
            const productData = await fetchData();
            dispatch(setProductViewData ({data: productData}));
        }catch(error){
            console.log(error);
        }
    }
}

export const fetchReadyProductViewData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const respose = await fetch(URL + "get-ready-stock");
            const data = await respose.json();
            return data.data;
        }

        try{
            const productData = await fetchData();
            dispatch(setReadyProductViewData ({data: productData}));
        }catch(error){
            console.log(error);
        }
    }
}

export const getTotalPoint = (total_price) => {
    return async (dispatch) => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL + 'get-point', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        total_price: total_price
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                return data.data;
            } catch (error) {
                throw new Error('Error fetching data: ' + error.message);
            }
        }

        try {
            const point = await fetchData();
            dispatch(setTotalPoint({ point: point }));
        } catch (error) {
            console.error(error);
        }
    }
}

export const buyPurchase = (data) => {
    const dataInput = data;
    return async (dispatch) => {
        const storeData = async () => {
            try{
                const response = await fetch(URL + "pre-order", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({data:dataInput})
                })
                const data = response.json();
                return data.data;
            }catch(error){
                console.log(error);
            }
        }

        try{
            const data = await storeData();
            fetchProductViewData();
            dispatch(setSuccesToast());
        }catch(error){
            console.log(error);
            dispatch(setFailedToast());
        }
    }
}


export const { setProductViewData,setReadyProductViewData,setAddCountProductData, setMinCountProductData, setDeleteCountProductData, setTotalPoint, setTotalPrice,setHideModalConfirmBuy,setShowModalConfirmBuy, setFailedToast, setSuccesToast, setNetralToast, setCancelDelyveryOption, setDeliveryOptionData} = productViewSlice.actions;

export default productViewSlice;