import React from 'react'

import './button.scss'
const Button = (props) => {
  return (
    <button className={`btn_${props.type}`} onClick={props.onClick}>{props.name}</button>
  )
}

export default Button