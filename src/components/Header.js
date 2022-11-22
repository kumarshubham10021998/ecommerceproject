import React from 'react'
import '../App.css';
const Header = (props) => {
  return (
    <div>
      <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    </div>
  )
}

export default Header
