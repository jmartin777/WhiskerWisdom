import React from 'react';
import Fact from './Fact';
import PropTypes from 'prop-types';
import './FactContainer.css';


function FactContainer({facts, deleteFact, favChange}){

    const factCards = facts.map(fact => {
      const favorite =
    typeof fact.favorite === 'string' ? fact.favorite === 'true' : fact.favorite;
      return (
        <Fact
        key={fact.id}
        name={fact.name}
        text={fact.text}
        favorite={favorite} 
        id={fact.id}
        deleteFact={deleteFact}
        favChange={favChange}
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