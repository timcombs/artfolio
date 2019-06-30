import React from 'react';

import './Card.css';
import Txt from './Txt.js';

const Card = ({ card, idx }) => {
  let theJSX;

  switch (card.type) {
    case 'Vid':
      theJSX = '';
      break;
    case 'Aud':
      theJSX = '';
      break;
    case 'Txt':
      theJSX = <div className='text' dangerouslySetInnerHTML={{__html: card.text}} />;
      break;
    case 'Web':
      theJSX =
        <a className="view" href={card.path}>
          <img className='web' src={card.image} alt={card.alt} />
        </a>;
      break;
    case 'Img':
      theJSX = '';
      break;
      default:
        console.log('Sorry, we have no bananas.');
  }

  return (
    <div className={`card ${card.type.toLowerCase()}`}>
      <h3>{card.title}</h3>
      {theJSX}
    </div>
  );
}

export default Card;