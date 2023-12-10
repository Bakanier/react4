import React, { useState } from 'react';

const TodoItem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
      <span style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
    </li>
  );
};

export default TodoItem;