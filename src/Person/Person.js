import React, { Component } from 'react';
import './Person.css';
 
const person = (props)=>{
    return (
        <div className="Person">
            <p onClick={props.click}>Its a {props.name} {props.age} </p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;