import React from 'react'
import './Button.css'

const Button = ({btnText, onClickHandler}) => {
  return (
    <button className='btn' onClick={onClickHandler} >{btnText}</button>
  )
}

export default Button