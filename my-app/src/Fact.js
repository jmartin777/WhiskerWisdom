import React from 'react';
import './Fact.css';

const Fact = ({ name, text, favorite, id, deleteFact }) => {
    return (
      <div className='fact'>
        <h3>{name}</h3>
        <p>{text}</p>
        <button onClick={() => deleteFact(id)}>🗑</button>
      </div>
    )
  }

export default Fact;