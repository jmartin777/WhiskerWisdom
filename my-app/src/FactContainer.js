import React from 'react';
import Fact from './Fact';
import './FactContainer.css';


function FactContainer({facts, deleteFact}){

    const factCards = facts.map(fact => {
      return (
        <Fact
          name={fact.name}
          text={fact.text}
          favorite={fact.id}
          id={fact.id}
          deleteFact = {deleteFact}
        />
      )
    })
  
    return (
      <div className='fact-container'>
        {factCards}
      </div>
    )
  }

export default FactContainer;