import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Textarea from './Textarea/Textarea';
import MyComponent from './Firebase-Component/firebase-component';
import Person from './Person/Person';



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

    const singlePersonClone = {...this.state.persons[personIndex]}

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

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red'); // classes ['red']
    }
    
    if(this.state.persons.length <= 1){
      classes.push('bold');  // classes ['red', 'bold']
    }

    let persons = null;

    if(this.state.showPerson){
      this.persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return  (<Person name={person.name} 
                             click={this.deleteHandler.bind(this, index)}
                             change={(e) =>this.nameChangeHandler(e, person.id)}
                             key={person.id}
                             age={person.age}/>)
          })}
        </div>
      );

      style.backgroundColor = 'green';
      
    }else{
      this.persons = null;
    }

    return (
       <div className="App">
        <h1>This is a heading</h1>
          <p>Its a paragraph</p>
          <p className={classes.join(' ')}>Another Para</p>
          <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
           {this.persons}
      </div>
    );
  }


}

export default App;

// ReactDOM.render(<App/> , document.getElementById('root'));