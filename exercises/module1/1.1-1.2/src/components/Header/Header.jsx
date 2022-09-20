import React from 'react'
import logo from './LOGO HE VINCI.png';

const Header = (props) => {
  return (
    <div>
        <img src={logo} className='' alt='Logo' />
        <h1>{props.course}</h1>
    </div>
    
  )
}

export default Header