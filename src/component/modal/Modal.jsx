import React from 'react'
import MModal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';
import Textfield from '../textfield/Textfield';
import Description from '../description/Description';
import Button from '../button/Button';
import { ReactComponent as AlertIcon } from '../../assets/icon/alertIcon.svg'

import styles from './modal.module.scss'
const Modal = (props) => {
  return (
    <MModal
      open={props.visible}
      disableAutoFocus={true}
      style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}
    >
      {
        props.isDelete ? 
        <div className={styles.modal_box} style={{height: '180px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
              <AlertIcon 
                style={{marginRight: '12px'}}
              />
              <h4>Delete Task</h4>
            </div>
            <CloseIcon />
          </div>
          <p className={styles.caption_delete}>Are you sure want to delete this task? your action can’t be reverted.</p>
          <div style={{marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent:'flex-end'}}>
            <div style={{marginRight: '10px'}}>
              <Button 
                type='cancel'
                name='Cancel'
              />
            </div>
            <Button 
              type='delete'
              name='Delete'
            />
          </div>
        </div>
        :
        <div className={styles.modal_box} style={{height: props.type === 'task' ? '311px' : '369px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <h4>{props.title}</h4>
            <CloseIcon />
          </div>
          <Textfield 
            label='Task Name'
            placeholder='Input here'
          />
          <div style={{marginTop: '49px'}}>
            {
              props.type === 'task' ? 
                <Textfield 
                  label='Task Name'
                  placeholder='Input here'
                  type='progress'
                /> 
                :
                <Description 
                  label='Description'
                  placeholder='Input here'
                />
            }
          </div>
          <div style={{marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent:'flex-end'}}>
            <div style={{marginRight: '10px'}}>
              <Button 
                type='cancel'
                name='Cancel'
              />
            </div>
            <Button 
              type='submit'
              name='Save Task'
            />
          </div>
        </div>
      }
    </MModal>
  )
}

export default Modal