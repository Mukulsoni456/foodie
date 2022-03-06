import { Add, Favorite } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, increaseCartValue } from '../redux/cartSlice'
import {Items} from '../data'
import './itemCard.css'




function ItemCard({imgSrc, title, price, id }) {
  const dispatch = useDispatch()
  const [AddFav, setAddFav] = useState(false)
  const handleCart = ()=>{
    console.log('hello')
    dispatch(addProduct({
      id:id
    }))
    dispatch(increaseCartValue())
  }
  return (
    <div className='item_card' >
        <div className="item_img_container">
        <img className='item_img' src={imgSrc} alt="" />
        </div>

        <div className='item_info'>
        <Favorite onClick={()=>{setAddFav(!AddFav)}} className={!AddFav?'fav_btn':'fav_btn_active'} ></Favorite>
        <h4 className='item_title'>{title}</h4>
        <p className='item_price'> $ {price}</p>
        <Add className='add_btn' onClick={handleCart}></Add>
        </div>

    </div>
  )
}

export default ItemCard