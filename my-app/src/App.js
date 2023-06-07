import React, { Component } from 'react';
import './App.css';
import Fact from './Fact'
import FactContainer from './FactContainer';
import Form from './Form';
import APIcalls from './APIcalls'
import getFacts from './APIcalls';
import { getFactByID,postFact, deleteFact } from './APIcalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      facts: []
    }
  }
  componentDidMount() {
    getFacts()
    .then(data =>{
      console.log()
      this.setState({facts: [...data]})
    })
    .catch(() => this.setState({error: "Get Facts Failed Please Check Server"}))
  }

  addFact = (newFact) => {
    this.setState({ facts: [...this.state.facts, newFact] });
  }
  

  deleteFact = (id) => {
    console.log(id);
    const filteredFacts = this.state.facts.filter(fact => fact.id != id);
    this.setState({ facts: filteredFacts });
  }

  
  render() {
    return (
      <main className='App'>
        <h1>Whisker Wisdom</h1>
        <Form addFact={this.addFact} />
        <FactContainer facts={this.state.facts} deleteFact={this.deleteFact} />
      </main>
    );
  }
}

export default App;
