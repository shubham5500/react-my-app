import React, { Component } from 'react';

const person = (props)=>{
    return (
        <div>
            <p onClick={props.click}>Its a {props.name} {props.age} </p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;