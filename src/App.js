import React , {useState} from 'react';
import Input from './Todo/Input';
import Button from './Todo/Button';
import TodoList from './Todo/TodoList';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([
    {
      title: 'Go to School!',
      isCompleted: false
    },
    {
      title: 'Buy milk!',
      isCompleted: true
    },
    {
      title: 'Drive a Car!',
      isCompleted: false
    },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      title: inputValue,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div style={appStyles}>
      <Input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginRight: '8px' }}
      />
      <Button
        onClick={handleAddTodo}
        label="Add Todo"
        style={{ backgroundColor: 'green', color: 'white' }}
      />
      <TodoList todos={todos} />
    </div>
  );
};

const appStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '300px', 
  margin: '0 auto', 
  marginTop: '150px', 
};

export default App;