import Label from './component/label/Label';
import Textfield from './component/textfield/Textfield';

function App() {
  return (
    <div className="App" style={{padding: '5px'}}>
      <Label 
        type="task1"
      />
      <Textfield 
        label='Title'
        placeholder='Input here'
      />
    </div>
  );
}

export default App;
