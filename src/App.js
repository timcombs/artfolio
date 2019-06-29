import React, { useState } from 'react';

import Card from './Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      title: 'one',
      type: 'Video',
    },
    {
      title: 'two',
      type: 'Audio',
    },
    {
      title: 'three',
      type: 'Web',
    },
    {
      title: 'four',
      type: 'Text',
    },
    {
      title: 'five',
      type: 'Errata',
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
    </div>
  );
}

export default App;
