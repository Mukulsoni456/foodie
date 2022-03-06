import {createSlice} from '@reduxjs/toolkit'
import {Items, items} from '../data'
export const cartSlice = createSlice({
    name:'products',
    initialState:{
        products : [],
        cartValue: 0
    },
    reducers : {
        addProduct: (state, action)=>{
            const item = Items.find((product)=> product.id === action.payload.id)
            const inCart = state.products.find((product)=> product.id === action.payload.id ? true:false)
            console.log(inCart)
            return {
                ...state,
                products : inCart ? state.products.map((product)=> product.id === action.payload.id ? {...product, qty : product.qty + 1}: product):
                [...state.products, {...item, qty :1}]
            }
        }
        ,
        increaseProduct: (state, action)=>{
            return {
                ...state,
                products: state.products.map((product)=>product.id === action.payload.id ?{...product, qty : product.qty + 1}:product)
            }
        },
        decreaseProduct: (state, action)=>{
            return {
                ...state,
                products: state.products.map((product)=>product.id === action.payload.id ?{...product, qty : product.qty - 1}:product)
            }
        },

        increaseCartValue:(state)=>{
            state.cartValue = state.cartValue + 1
        },
        decreaseCartValue:(state)=>{
            state.cartValue = state.cartValue - 1
        }

    }
})

export const {addProduct, increaseProduct,decreaseProduct,increaseCartValue, decreaseCartValue } = cartSlice.actions;
export default cartSlice.reducer