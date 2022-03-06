import {configureStore} from '@reduxjs/toolkit'
import productReducer from './redux/cartSlice'
export default configureStore({
    reducer:{
        products : productReducer
    }
})