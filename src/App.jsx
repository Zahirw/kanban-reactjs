import Button from "./component/button/Button";
import ButtonNewTask from "./component/button/ButtonNewTask";

import styles from './app.module.scss'
function App() {
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
        <ButtonNewTask />
      </div>
    </div>
  );
}

export default App;
