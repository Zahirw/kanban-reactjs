import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from "./store/todos";

// Component
import Button from "./component/button/Button";
import GroupTask from "./component/groupTask/GroupTask";

// Services
import { getListTodos } from "./services/todos/todosService";

import styles from './app.module.scss'
function App() {
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const fetchTodos = async() => {
    await getListTodos()
      .then(response => {
        // console.log(response.data)
        dispatch(setTodos(
          [
            {
              "id": 1,
              "title": "Group Task 1",
              "created_by": "1",
              "created_at": "2021-04-20T23:47:50.046Z",
              "updated_at": "2021-04-20T23:47:50.046Z"
            },
            {
              "id": 2,
              "title": "Group Task 2",
              "created_by": "1",
              "created_at": "2021-04-21T00:04:23.906Z",
              "updated_at": "2021-04-21T00:04:23.906Z"
            },
            {
              "id": 3,
              "title": "Group Task 3",
              "created_by": "1",
              "created_at": "2021-04-21T00:04:23.906Z",
              "updated_at": "2021-04-21T00:04:23.906Z"
            }
          ]
        ))
      })
      .catch(err => {
        console.error(err)
    })
  }
  useEffect(() => {
    fetchTodos()
  },[])

  return (
    <div className="App">
      <header>
        <h4>Product Roadmap</h4>
        <Button
          type='submit'
          name='+ Add New Group'
        />
      </header>
      <div className={styles.body}>
        {todos.map(item => 
          <GroupTask 
            key={item.id}
            id={item.id}
            type={`task${item.id}`}
          />
        )}
      </div>
    </div>
  );
}

export default App;
