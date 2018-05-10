import React, { Component } from 'react';

const person = (props)=>{
    return (
        <div>
            <p onClick={props.click}>Its a {props.name} {props.age} </p>
        </div>
    )
}

export default person;