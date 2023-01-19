import React from 'react'

import './textfield.scss'

const Textfield = (props) => {
  return (
    <div className='textfield'>
      <label className='label_text'>{props.label}</label>
      <input className={props.type ? 'progress' : ''} type="text" placeholder={props.placeholder}/>
    </div>
  )
}

export default Textfield