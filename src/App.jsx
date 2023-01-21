import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from "./store/todos";

// Component
// import Button from "./component/button/Button";
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
        console.log(response.data)
        dispatch(setTodos(response.data.map((item, index)=> ({...item, number: index+1}))
        ))
      })
      .catch(err => {
        console.error(err)
    })
  }
  useEffect(() => {
    fetchTodos()
    /* eslint-disable */
  },[])

  return (
    <div className="App">
      <header>
        <h4>Product Roadmap</h4>
        {/* <Button
          type='submit'
          name='+ Add New Group'
        /> */}
      </header>
      <div className={styles.body}>
        {todos.map(item => 
          <GroupTask 
            key={item.id}
            id={item.number}
            type={`task${item.number}`}
          />
        )}
      </div>
    </div>
  );
}

export default App;
