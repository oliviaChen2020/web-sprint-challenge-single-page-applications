import React from 'react'
import {useHistory} from "react-router-dom"

export default function Home() {
  const history = useHistory()

  const routeToOrder = () => {
    console.log(history)
    history.push('/home')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:0.752xh;0,0.139xh&resize=640:*'
        alt='pizzaria'
      />
      <button
        onClick={routeToOrder}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
