import React from 'react'
import './banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className="banner_info">
            <h4>Hello vetri</h4>
            <p>Get free discount for every 20$ purchases</p>
            <button>Learn More</button>
        </div>
        <div className="banner_image"><img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" alt="" /></div>
    </div>
  )
}

export default Banner