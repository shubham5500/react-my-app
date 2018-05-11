import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
    props.persons.map((person, index)=>{
    return  (<Person name={person.name} 
                        key={person.id}
                        click={() => props.clicked(index)}
                        change={(e) =>props.changed(e, person.id)}                               
                        age={person.age}/>)
    }) 
)


export default persons;