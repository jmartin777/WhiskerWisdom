import React from 'react';
import Fact from './Fact';
import './FactContainer.css';


function FactContainer({facts, deleteFact, favChange}){

    const factCards = facts.map(fact => {
      return (
        <Fact
          key={fact.id}
          name={fact.name}
          text={fact.text}
          favorite={fact.favorite}
          id={fact.id}
          deleteFact = {deleteFact}
          favChange= {favChange}
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