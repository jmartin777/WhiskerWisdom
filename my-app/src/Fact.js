import React from 'react';
import './Fact.css';

const Fact = ({ name, text, favorite, id, deleteFact, favChange }) => {
    
    return (
      <div className='fact'>
        <h3>{name}</h3>
        <p>{text}</p>
        <label>
            Favorite:
            <input
            type='checkbox'
            checked={favorite}
            
            onChange={() => favChange(id)}
            />
        </label>
        <button onClick={() => deleteFact(id)}>🗑</button>
      </div>
    )
  }

export default Fact;