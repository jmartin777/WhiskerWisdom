import React, { Component } from 'react';
import './App.css';
import Fact from './Fact'
import FactContainer from './FactContainer';
import Form from './Form';
import ErrorPage from './ErrorPage';
import APIcalls from './APIcalls'
import getFacts from './APIcalls';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import { getFactByID,postFact, deleteFact , patchFavorite } from './APIcalls';


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
    postFact(newFact)
  }
  handleFavoriteChange = (id) => {
    const updatedFacts = this.state.facts.map(fact => {
      if(fact.id == id){
        patchFavorite(id,{'favorite':!fact.favorite})
        return{ ...fact, favorite: !fact.favorite}
        
      }
     
     return fact;
    });
    this.setState({ facts: updatedFacts });

  }

  deleteFact = (id) => {
    console.log(id);
    const filteredFacts = this.state.facts.filter(fact => fact.id != id);
    this.setState({ facts: filteredFacts });
    deleteFact(id)
  }

  
  render() {
    return (
      <Router>
        <main className='App'>
          <h1>Whisker Wisdom</h1>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/error'>More Facts!</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home addFact={this.addFact} facts={this.state.facts} deleteFact={this.deleteFact} favChange={this.handleFavoriteChange} />} />
            <Route path='/error' element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    );
  }
}

function Home({ addFact, facts, deleteFact, favChange }) {
  return (
    <div>
      <Form addFact={addFact} />
      <FactContainer facts={facts} deleteFact={deleteFact} favChange={favChange} />
    </div>
  );
}


export default App;
