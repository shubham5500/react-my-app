import React, { Component } from 'react';

class Textarea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write something'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        console.log(event.target.value)
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        console.log(event.target)
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }




  export default Textarea;