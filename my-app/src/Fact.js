import React from 'react';
import './Fact.css';

const Fact = ({ name, text, favorites, id }) => {
    return (
      <div className='fact'>
        <h3>{name}</h3>
        <p>{text}</p>
        <button onClick={() => deleteIdea(id)}>🗑</button>
      </div>
    )
  }

export default Card;