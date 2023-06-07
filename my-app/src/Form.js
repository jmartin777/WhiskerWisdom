import React, { Component } from 'react';
import './Form.css';
import Fact from './Fact'
import FactContainer from './FactContainer';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      text: '',
      favorite: '',
      id: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  clearInputs = () => {
    this.setState({ name: '', text: '' });
  }

  submitFact = event => {
    event.preventDefault(); // prevents the page from refreshing when the form submits
    const newFact = {
      id: Date.now(),
      ...this.state // spreading in the title and description
    }
    
    this.props.addFact(newFact); // using the addIdea method from App that we passed as a prop to Form
    this.clearInputs(); // invoking the method I wrote below to reset the inputs
  }

  render() {
    return (
        <form>
            <input
            type='text'
            placeholder='Fact Title'
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
            />

            <input
            type='text'
            placeholder='Fact'
            name='text'
            value={this.state.text}
            onChange={event => this.handleChange(event)}
            />

            <button onClick={event => this.submitFact(event)}>SUBMIT</button>  
        </form>
    )
  }
}

export default Form;
