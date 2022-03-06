import React from 'react'
import './cart.css'
import CartItem from './CartItem'
import {useSelector} from 'react-redux'
function Cart() {
  const products = useSelector((state)=> state.products.products)
  console.log(products)
  // const products = useSelector((state)=>state.products.products)
  return (
    <div className='cart'>
      <div className="cart_info">
        <h4>Your Cart</h4>
        <p>Total items</p>
      </div>

      {/*       imgsrc:imgSrc,
      title:title,
      price:price */}
      {
        products.map((items)=>(
          items.qty > 0 &&
          <CartItem key={items.id} id={items.id} itemQty={items.qty} imgsrc = {items.imgSrc} itemid={items.itemId} title={items.name} price={items.price}></CartItem>
        ))
      }
    </div>

  )
}

export default Cart