import Label from './component/label/Label';
import Textfield from './component/textfield/Textfield';
import Description from './component/description/Description';
import DialogMenu from './component/dialogMenu/DialogMenu';
import Button from './component/button/Button';

function App() {
  return (
    <div className="App" style={{padding: '5px'}}>
      <Label 
        type="task1"
      />
      <Label 
        type="task2"
      />
      <Label 
        type="task3"
      />
      <Label 
        type="task4"
      />
      <Textfield 
        label='Title'
        placeholder='Input here'
      />
      <Textfield 
        label='Title'
        placeholder='70%'
        type='progress'
      />
      <Description 
        label='Description'
        placeholder='Input here'
      />
      <DialogMenu />
      <Button 
        type='submit'
        name='Save Task'
      />
      <Button 
        type='cancel'
        name='Cancel'
      />
      <Button 
        type='delete'
        name='Delete'
      />
    </div>
  );
}

export default App;
