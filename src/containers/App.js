import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Person from '../components/Persons/Person/Person';

// import Textarea from './Textarea/Textarea';
// import MyComponent from './Firebase-Component/firebase-component';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {

  state = {
    persons: [
      {id: 'one', name: 'State name 1', age: 28},
      {id: 'two', name: 'State name 2', age: 45},
      {id: 'three', name: 'State name 3', age: 53},
    ],
    showPerson: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((per)=>{
      return per.id === id;
    });
    
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({persons: persons})

  }

  togglePersonsHandler = ()=>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deleteHandler = (personIndex) => {
    console.log(personIndex);
    const pers = [...this.state.persons];
    pers.splice(personIndex, 1);
    this.setState({
      persons: pers
    })
  } 

  
  render() {
    const style = {
      backgroundColor: 'lightgrey',
      border: '1px solid grey',
      borderRadius: '4px',
      color: 'black',
      padding: '8px',
      font: 'inherit'
    }

    let assignedClass = [];

    if(this.state.persons.length <= 2){
      assignedClass.push(classes.red); // classes ['red']
    }
    
    if(this.state.persons.length <= 1){
      assignedClass.push(classes.bold);  // classes ['red', 'bold']
    }

    let persons = null;

    if(this.state.showPerson){
      this.persons = (
        <div>
          <Persons persons={this.state.persons} 
                   clicked={this.deleteHandler} 
                   changed={this.nameChangeHandler}/>
        </div>
        // ErrorBoundary is a higher Order Component
      );
      style.backgroundColor = 'green';
    }
    else{
      this.persons = null;
    }

    return (
       <div className={classes.App}>
        <h1>This is a heading</h1>
          <p>Its a paragraph</p>
          <p className={assignedClass.join(' ')}>Another Para</p>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
           {this.persons}
      </div>
    );
  }
}

export default App;