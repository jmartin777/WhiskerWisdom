import React from 'react';
import Fact from './Fact';
import PropTypes from 'prop-types';
import './FactContainer.css';


function FactContainer({facts, deleteFact, favChange}){
    FactContainer.propTypes = {
      facts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }))
        .isRequired,
        deleteFact: PropTypes.func.isRequired,
        favChange: PropTypes.func.isRequired
  }
  
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