import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setItems } from '../../store/todos';

// Component
import Label from '../label/Label'
import LinearProgress from '@mui/material/LinearProgress';
import { ReactComponent as SettingIcon } from '../../assets/icon/settingIcon.svg'
import ButtonNewTask from '../button/ButtonNewTask'
import Modal from '../modal/Modal';

// services
import { getListItems } from "../../services/items/itemsService";
import { createItems } from "../../services/items/itemsService";

import styles from './groupTask.module.scss'

const GroupTask = (props) => {
  const [items, setItems] = useState([])
  const [modal, setModal] =  useState(false)
  const [name, setName] = useState('')
  const [progress, setProgress] = useState('')
  const dispatch = useDispatch()

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

  const handleModal = () => {
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
    const payload = {
      name: name,
      progress_percentage: progress,
    }
    console.log(payload)
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
              <p>{record.progress_percentage}</p>
              <div style={{textAlign: 'right'}}>
                <SettingIcon />
              </div>
            </div>
          </div>
        </div>
      )}
      <ButtonNewTask onClick={handleModal}/>
      <Modal 
        visible={modal}
        id={props.id}
        title='Create Task'
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