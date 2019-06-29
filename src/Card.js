import React from 'react';

import './Card.css';

const Card = ({ card, idx }) => {
  return (
    <div className={`card ${card.type.toLowerCase()}`}>
      {card.title}
    </div>
  );
}

export default Card;