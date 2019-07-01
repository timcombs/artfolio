import React from 'react';

import './Card.css';
import Txt from './Txt.js';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg|gif)$/));

const Card = ({ card, index }) => {
  let theJSX;
  let imgname = card.imgname;

  switch (card.type) {
    case 'Vid':
      theJSX =
        <video className='vid-wrap' poster={images[imgname]}  preload='meta' controls width='auto'>
          <source src='https://www.desolidstate.com/vid/crack-rend.mp4' type='video/mp4' />
      </video>
      break;
    case 'Aud':
      theJSX = '';
      break;
    case 'Txt':
      theJSX = <div className='text' dangerouslySetInnerHTML={{__html: card.text}} />;
      break;
    case 'Web':
      theJSX =
        <a className='web-link' href={card.path}>
          <img className='web' src={images[imgname]} alt={card.alt} />
        </a>
      break;
    case 'Img':
      theJSX = '';
      break;
      default:
        console.log('Sorry, we have no bananas.');
  }

  return (
    <div className={`card ${card.type.toLowerCase()}`}>
      <h3>
        {card.title}
        <div className='card-type'>{card.type}</div>
      </h3>
      
      {theJSX}
    </div>
  );
}

export default Card;