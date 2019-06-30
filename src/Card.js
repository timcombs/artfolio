import React from 'react';

import './Card.css';
import Txt from './Txt.js';

const Card = ({ card, idx }) => {
  return (
    <div className={`card ${card.type.toLowerCase()}`}>
      <h3>{card.title}</h3>
      <div className='text' dangerouslySetInnerHTML={{__html: card.text}} />
    </div>
  );
}

export default Card;