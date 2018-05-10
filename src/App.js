import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Textarea from './Textarea/Textarea';
import MyComponent from './Firebase-Component/firebase-component';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [
      {name: 'State name 1', age: 28},
      {name: 'State name 2', age: 45},
      {name: 'State name 3', age: 53},
      {name: 'State name 4', age: 74},
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'new State name 2', age: 214234},
        {name: 'State name 3', age: 24234},
        {name: 'State name 4', age: 74},
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'fsdfsd', age: 214234},
        {name: 'State name 3', age: 24234},
      ]
    });
  }

  render() {
    return (
     <div className="App">
       <h1>This is a heading</h1>
       <p>Its a paragraph</p>
       <p>Another Para</p>
       <button onClick={this.switchNameHandler.bind(this, 'Shubham')}>Switch Name</button>
       <Person name={this.state.persons[0].name} 
               age={this.state.persons[0].age}
               click={() => this.switchNameHandler('same State')}
               change={this.nameChangeHandler}/>

       <Person name={this.state.persons[1].name} 
               age={this.state.persons[1].age}/>
               
       <Person name={this.state.persons[2].name} 
               age={this.state.persons[2].age}/>
      </div>
    );
  }


}

ReactDOM.render(<App/> , document.getElementById('root'));

// export default App;
