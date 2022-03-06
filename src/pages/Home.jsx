
import React, { useState,useEffect} from 'react'
import Banner from '../components/Banner'
import Cart from '../components/Cart'
import Header from '../components/Header'
import ItemCard from '../components/ItemCard'
import Menu from '../components/Menu'
import { Items } from '../data'
import './home.css'

function Home() {
  const [MainData, setMainData] = useState(Items)
  const [Click, setClick] = useState(false)
  return (

    <div className='home'>
        <Header setClick = {setClick} Click = {Click}></Header>
        {
          !Click?        <main>
          <Banner></Banner>
          <Menu setMainData={setMainData} Items={Items}></Menu>

          <section className='items'>

            {
             MainData && MainData.map((item)=> (
                 <ItemCard key={item.id} id={item.id} imgSrc={item.imgSrc} title={item.name} price={item.price} ></ItemCard>
              ))
            }
          </section>
      </main> : <Cart></Cart>
        }

    </div>
  )
}

export default Home