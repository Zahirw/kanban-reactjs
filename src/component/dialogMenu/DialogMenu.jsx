import React from 'react'
import { ReactComponent as ArrowRight } from '../../assets/icon/arrowRight.svg'
import { ReactComponent as ArrowLeft } from '../../assets/icon/arrowLeft.svg'
import { ReactComponent as EditIcon } from '../../assets/icon/editIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icon/deleteIcon.svg'

import './dialogMenu.scss'

const DialogMenu = () => {
  return (
    <div className='dialog_menu'>
      <div className='menu'>
        <ArrowRight /> 
        <p>Move Right</p>
      </div>
      <div className='menu'>
        <ArrowLeft /> 
        <p>Move Left</p>
      </div>
      <div className='menu'>
        <EditIcon /> 
        <p>Edit</p>
      </div>
      <div className='menu_delete'>
        <DeleteIcon /> 
        <p>Delete</p>
      </div>
    </div>
  )
}

export default DialogMenu