import { useEffect } from "react";
import Button from "./component/button/Button";
import { getListTodos } from "./services/todos/todos";

import styles from './app.module.scss'
function App() {

  const fetchTodos = async() => {
    await getListTodos()
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.error(err)
    })
  }
  useEffect(() => {
    fetchTodos()
  }, [])

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
        asd
      </div>
    </div>
  );
}

export default App;
