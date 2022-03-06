import React from 'react'
import './header.css'
import {Search, ShoppingCart, Menu} from '@mui/icons-material';
import { Avatar} from '@mui/material';
import { useSelector } from 'react-redux';
function Header({setClick, Click}) {

  const cartValue = useSelector((state)=> state.products.cartValue)

  const handleCart =()=>{
    setClick(!Click)
  }
  return (
    <div className='header'>
        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" className='logo' alt="" />
        <div className="search_box">
            <Search className='search_icon'></Search>
            <input type="text" className='search_input' />
        </div>

        <div className="shopping_cart" onClick={handleCart}>
            <ShoppingCart className='cart_icon'></ShoppingCart>
            <p>{cartValue}</p>
        </div>
        <Avatar className='profile_image'></Avatar>
        <Menu></Menu>
    </div>
  )
}

export default Header