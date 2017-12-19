import React from 'react';

export default props => {
  return (
  <div>
    <input 
    type="checkbox"
    onClick={props.onClick}
    />
    <label>{props.category}</label>
  </div>
)}