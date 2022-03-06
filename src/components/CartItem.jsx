import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCartValue, decreaseProduct, increaseCartValue, increaseProduct } from '../redux/cartSlice'
import './cartItem.css'

function Cartitem({imgsrc, title, price, itemid, itemQty, id}) {
  const dispatch = useDispatch()
  const handleIncrease = ()=>{
      dispatch(increaseProduct({id:id}))
      dispatch(increaseCartValue())
  }
  const handleDecrease = ()=>{
    dispatch(decreaseProduct({id:id}))
    dispatch(decreaseCartValue())
  }
  return (

    <div className='cart_item' id={itemid}>
        <img className='cart_item_image' src={imgsrc} alt="" />
        <div className="cart_item_section">
            <div className="cart_item_info">
                <h3>{title}</h3>
                <p className='cart_item_quantity'> x{itemQty}</p>
            </div>
            <div className="cart_item_option">
                <p className='cart_option' onClick={handleIncrease}>+</p>
                <p className='cart_option' onClick={handleDecrease}>-</p>
            </div>
        </div>
        <p className="cart_item_price">{price}</p>
    </div>
  )
}

export default Cartitem