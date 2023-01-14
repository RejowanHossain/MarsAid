import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Button.css'

const Button = ({text, goTo}) => {
  return (
   <div className='btn-wrapper'>
        <div className='theme-btn'>
            <Link to={goTo}>{text}</Link>
        </div>
        <div className="arrow">
            <Icon icon="material-symbols:arrow-right-alt-rounded" /> 
        </div>
   </div>
  )
}

export default Button
