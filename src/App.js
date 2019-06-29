import React, { useState } from 'react';

import Card from './Card';
import StyleButtons from './StyleButtons';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      title: 'ω∀⦂⟟ ∫⨺⟠∤',
      type: 'Web',
      image: 'img/digiWabiSabi.gif',
      alt: 'gif of digiWabiSabi web art',
      path: 'https://www.desolidstate.com/digiWabiSabi/digiWabiSabi.html'
    },
    {
      title: 'crack-rend',
      type: 'Vid',
      image: 'img/thumbs/crack-rend_thumb.jpg',
      alt: 'picture of crack-rend video',
      path: 'vid/crack-rend.ogg'
    },
    {
      title: '8 Bit Adventure',
      type: 'Web',
      image: 'img/8bitAdv.gif',
      alt: 'gif of 8 Bit Adventure web art',
      path: 'https://www.desolidstate.com/adventureDragons/advDragons.html'
    },
    {
      title: 'one',
      type: 'Img',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'two',
      type: 'Aud',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'three',
      type: 'Web',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'four',
      type: 'Txt',
      image: '',
      alt: '',
      path: ''
    },
    {
      title: 'five',
      type: 'Vid',
      image: '',
      alt: '',
      path: ''
    },
  ])

  return (
    <div className='app'>
      <div className='cards'>
        {cards.map((card, idx) => (
          <Card key={idx}
            index={idx}
            card={card}
          />
        ))}
      </div>

      <StyleButtons />
    </div>
  );
}

export default App;
