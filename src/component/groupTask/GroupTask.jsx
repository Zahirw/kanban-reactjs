import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setItems, setItemsEdit } from '../../store/todos';

// Component
import LinearProgress from '@mui/material/LinearProgress';
import Popover from '@mui/material/Popover';
import Label from '../label/Label'
import ButtonNewTask from '../button/ButtonNewTask'
import Modal from '../modal/Modal';
import DialogMenu from '../dialogMenu/DialogMenu';
import { ReactComponent as SettingIcon } from '../../assets/icon/settingIcon.svg'

// services
import { getListItems, createItems, updateItems } from "../../services/items/itemsService";

import styles from './groupTask.module.scss'

const GroupTask = (props) => {
  const itemsEdit = useSelector((state) => state.todos.itemsEdit)
  const dispatch = useDispatch()

  const [items, setItems] = useState([])
  const [modal, setModal] =  useState(false)
  const [typeModal, setTypeModal] = useState('')
  const [name, setName] = useState('')
  const [progress, setProgress] = useState('')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dateGroup = () => {
    switch (props.type) {
      case 'task1':
        return 'January - March';
      case 'task2':
        return 'April - June';
      case 'task3':
        return 'July- September';
      case 'task4':
        return 'October - December';
      default:
        break;
    }
  }

  const handlePopOpen = (e, param) => {
    setAnchorEl(e.currentTarget)
    dispatch(setItemsEdit(param))
    console.log(param)
  }

  const handlePopClose = () => {
    setAnchorEl(null)
    dispatch(setItemsEdit({}))
  }

  const handleModal = (param) => {
    setTypeModal(param)
    setModal(!modal)
  }
  
  const fetchItems = async() => {
    await getListItems(props.id)
      .then(response => {
        console.log(response.data)
        setItems(response.data)
        // dispatch(setItems(
        //   [
        //     {
        //       "id": 1,
        //       "name": "Redesign page",
        //       "done": null,
        //       "todo_id": 1,
        //       "created_at": "2021-04-21T00:12:06.116Z",
        //       "updated_at": "2021-04-21T00:12:06.116Z",
        //       "progress_percentage": null
        //     },
        //     {
        //       "id": 2,
        //       "name": "Redesign page part 2",
        //       "done": null,
        //       "todo_id": 1,
        //       "created_at": "2021-04-21T00:14:38.397Z",
        //       "updated_at": "2021-04-21T00:14:38.397Z",
        //       "progress_percentage": 60
        //     }
        //   ]
        // ))
      })
      .catch(err => {
        console.error(err)
    })
  }

  const handleSubmit = async() => {
    if (typeModal === 'Edit') {
      const payload = {
        name: name,
        progress_percentage: progress,
        target_todo_id: props.id
      }
      await updateItems(props.id, payload, itemsEdit.id)
      .then(response => {
        console.log(response.data)
        handleModal()
        handlePopClose()
        fetchItems()
      })
      .catch(err => {
        console.error(err)
      })
    }
    else if (typeModal === 'Create') {
      const payload = {
        name: name,
        progress_percentage: progress,
      }
      await createItems(props.id, payload)
        .then(response => {
          console.log(response.data)
          handleModal()
          fetchItems()
        })
        .catch(err => {
          console.error(err)
      })
    }
  }

  const handleRight = async() => {
    const payload = {
      // name: name,
      // progress_percentage: progress,
      target_todo_id: props.id+1
    }
    await updateItems(props.id, payload, itemsEdit.id)
    .then(response => {
      console.log(response.data)
      handlePopClose()
      fetchItems()
    })
    .catch(err => {
      console.error(err)
    })
  }

  const handleLeft = async() => {
    const payload = {
      // name: name,
      // progress_percentage: progress,
      target_todo_id: props.id-1
    }
    await updateItems(props.id, payload, itemsEdit.id)
    .then(response => {
      console.log(response.data)
      handlePopClose()
      fetchItems()
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    fetchItems()
  }, []);
  return (
    <div className={styles[props.type]}>
      <Label 
        type={props.type}
      />
      <p className={styles.date}>{dateGroup()}</p>
      
      {items.map(record=>
        <div className={styles.card} key={record.id}>
          <div>
            <p>{record.name}</p>
            <div className={styles.progress_bar}>
              <LinearProgress
                variant="determinate" 
                value={record.progress_percentage}
                sx={{
                  '& .MuiLinearProgress-bar1Determinate': {
                    backgroundColor: '#01959F',
                  },
                  backgroundColor: '#EDEDED',
                  height: '16px',
                  borderRadius: '25px',
                }}
              />
              <p>{record.progress_percentage}%</p>
              <div style={{textAlign: 'right'}}>
                <SettingIcon 
                  style={{cursor: 'pointer'}}
                  aria-describedby={record}
                  onClick={(e)=>handlePopOpen(e, record)}
                />
                <Popover
                  id={record}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handlePopClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  sx={{
                    '.MuiPopover-paper': {
                      overflowY: 'hidden',
                      boxShadow: 'none'
                    },
                  }}
                >
                  <DialogMenu 
                    onEdit={()=>handleModal('Edit')}
                    onRight={handleRight}
                    onLeft={handleLeft}
                  />
                </Popover>
              </div>
            </div>
          </div>
        </div>
      )}
      <ButtonNewTask onClick={()=>handleModal('Create')}/>
      <Modal 
        visible={modal}
        id={props.id}
        title={`${typeModal} Task`}
        typeModal={typeModal}
        type='task'
        handleName={(e)=> setName(e.target.value)}
        handleProgress={(e)=> setProgress(e.target.value)}
        handleSubmit={handleSubmit}
        close={handleModal}
      />
      {/* <div className={styles.card_notask}>
        <p>No Task</p>
      </div> */}
    </div>
  )
}

export default GroupTask