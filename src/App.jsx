import Label from './component/label/Label';
import Textfield from './component/textfield/Textfield';
import Description from './component/description/Description';

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
      <Description 
        label='Description'
        placeholder='Input here'
      />
    </div>
  );
}

export default App;
