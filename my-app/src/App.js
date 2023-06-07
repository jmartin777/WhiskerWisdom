import React, { Component } from 'react';
import './App.css';
import Fact from './Fact'
import FactContainer from './FactContainer';
import Form from './Form';


class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  // componentDidMount() {
  //   acquireInfo()
  //   .then(data =>{
  //     console.log()
  //     this.setState({ideas: [...data]})
  //   })
  //   .catch(() => this.setState({error: "not purrrrfecto"}))
  // }

  addFact = (newFact) => {
    this.setState({ facts: [...this.state.facts, newFact] });
  }
  
  // updateAPIinfo = (newIdea) => {
  //   //console.log(newIdea)
  //   updateInfo(newIdea);
  // }
  deleteFact = (id) => {
    console.log(id);
    const filteredFacts = this.state.facts.filter(fact => fact.id != id);
    deleteFact(id);
    this.setState({ facts: filteredFacts });
  }

  render() {
    return(
      <main className='App'>
        <h1>Whisker Wisdom</h1>
      </main>
    )
  }
}

export default App;
