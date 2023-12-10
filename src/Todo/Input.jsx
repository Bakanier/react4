import React from 'react';

const Input = (props) => {
  return (
    <input
      type={props.type || 'text'}
      placeholder={props.placeholder || 'Enter text'}
      value={props.value}
      onChange={props.onChange}
      style={props.style}
    />
  );
};

export default Input;