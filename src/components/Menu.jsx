import React from 'react'
import MenuItem from './MenuItem'
import './menu.css'
import { MenuItems } from '../data'

function Menu({setMainData, Items}) {
  return (
    <div className='menu_row'>

      {
        MenuItems.map( (e)=>
         (<MenuItem setMainData={setMainData} Items={Items} itemid={e.itemId} key={e.id} vlaue={e.itemId} imgSrc={e.imgSrc} title={e.name}></MenuItem>)
        )
      }
    </div>
  )
}

export default Menu