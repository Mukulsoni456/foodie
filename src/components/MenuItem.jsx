import React, { useState } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './MenuItem.css'
function MenuItem({title, imgSrc, value, itemid , Items, setMainData}) {
  const [ItemValue, setItemValue] = useState('')

  const handleFilter = async ()=>{
    setItemValue(itemid)
    await setMainData(Items.filter(item=>item.itemId === ItemValue))
  }
  return (
    <div className='menu_item' onClick={handleFilter}>
        <img src={imgSrc} className='menu_image' alt="" />
        <h4 className='menu_item_title'>{title}</h4>
        <p className='menu_item_icon' value={value}><NavigateNextIcon></NavigateNextIcon></p>
    </div>
  )
}

export default MenuItem