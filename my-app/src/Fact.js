import React from 'react';
import PropTypes from 'prop-types';
import './Fact.css';

const Fact = ({ name, text, favorite, id, deleteFact, favChange }) => {
  Fact.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    deleteFact: PropTypes.func.isRequired,
    favChange: PropTypes.func.isRequired
  };
  
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
        <button onClick={() => deleteFact(id)}>𝔻𝕖𝕝𝕖𝕥𝕖 🗑</button>
      </div>
    )
    
  }

export default Fact;