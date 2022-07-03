import React, { Component } from 'react'

export default class MultipleInputAdd extends Component {
    render() {
        const {
         type,
         placeholder,
         name,
         value,
         onChange,
         className,
         error,
         addInputFileld
        } = this.props;
        return (
         <div className={className}>
          <label>{placeholder}</label>
          <input
           type={type}
           placeholder={placeholder}
           name={name}
           maxLength={name === "phone"?10:''}
           value={value}
           onChange={onChange}
          />
          {error && <p className='error'>{error}</p>}
          <button className='add-input' onClick={addInputFileld}>+</button>
         </div>
        );
       }
}
