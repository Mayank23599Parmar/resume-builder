import React, { Component } from 'react';

class CustomTextArea extends Component {
 render() {
  const {
   placeholder,
   name,
   value,
   onChange,
   className,
   error,
  } = this.props;
  return (
   <div className={className}>
    <label>{placeholder}</label>
    <textarea  name={name}
     value={value}
     onChange={onChange}>
    {value}
    </textarea>
    {error && <p className='error'>{error}</p>}
   </div>
  );
 }
}

export default CustomTextArea;
