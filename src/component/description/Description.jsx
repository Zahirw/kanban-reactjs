import React from 'react'

import './description.scss'

const Description = (props) => {
  return (
    <div className='description'>
      <label className='label_text'>{props.label}</label>
      <textarea placeholder={props.placeholder}/>
    </div>
  )
}

export default Description