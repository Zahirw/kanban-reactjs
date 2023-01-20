import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setItems } from '../../store/todos';

// Component
import Label from '../label/Label'

// services
import { getListItems } from "../../services/items/itemsService";

import styles from './groupTask.module.scss'

const GroupTask = (props) => {
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
  
  const fetchItems = async() => {
    await getListItems(props.id)
      .then(response => {
        // console.log(response.data)
        dispatch(setItems(
          [
            {
              "id": 1,
              "name": "Redesign page",
              "done": null,
              "todo_id": 1,
              "created_at": "2021-04-21T00:12:06.116Z",
              "updated_at": "2021-04-21T00:12:06.116Z",
              "progress_percentage": null
            },
            {
              "id": 2,
              "name": "Redesign page part 2",
              "done": null,
              "todo_id": 1,
              "created_at": "2021-04-21T00:14:38.397Z",
              "updated_at": "2021-04-21T00:14:38.397Z",
              "progress_percentage": 60
            }
          ]
        ))
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
    </div>
  )
}

export default GroupTask