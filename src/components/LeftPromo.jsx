import React from 'react'
import img from '../assets/image/Organiser issues (1) 2.png'
import './promo.css'

const LeftPromo = ({ className = '' }) => {
  return (
    <div className={`left-promo ${className}`}>
      <img src={img} alt="promo" />
    </div>
  )
}

export default LeftPromo


