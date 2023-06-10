import React, { Component } from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      text: '',
      favorite: '',
      id: ''
    }
    Form.propTypes = {
      addFact: PropTypes.func.isRequired
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  clearInputs = () => {
    this.setState({ name: '', text: '' });
  }

  submitFact = event => {
    event.preventDefault(); 
    const newFact = {
      id: Date.now(),
      ...this.state 
    }
    
    this.props.addFact(newFact); 
    this.clearInputs(); 
  }

  render() {
    return (
        <form>
            <input
            type='text'
            placeholder='Cat Fact Title'
            name='name'
            value={this.state.name}
            onChange={event => this.handleChange(event)}
            />

            <input
            type='text'
            placeholder='Cat Fact'
            name='text'
            value={this.state.text}
            onChange={event => this.handleChange(event)}
            />

            <button onClick={event => this.submitFact(event)}>𝕊𝕦𝕓𝕞𝕚𝕥 🐾</button>  
        </form>
    )
  }
}

export default Form;
