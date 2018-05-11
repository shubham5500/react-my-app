import React, { Component } from 'react';
import personClasses from './Person.css';
 
const person = (props)=>{

    return (
        <div className={personClasses.Person}>
            <p onClick={props.click}>Its a {props.name} {props.age} </p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;