import React from 'react';

export default props => {
  return (
  <div>
    <input 
    type="checkbox"
    defaultChecked
    onClick={props.onClick}
    />
    <label>{props.category}</label>
  </div>
)}