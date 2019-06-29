import React, { useState } from 'react';
import './App.css';

const Card = ({ card, idx }) => {
  return (
    <div className='card'>
      {card.title}
    </div>
  );
}

function App() {
  const [cards, setCards] = useState([
    {
      title: 'video',
    },
    {
      title: 'audio',
    },
    {
      title: 'web',
    },
    {
      title: 'text',
    },
    {
      title: 'errata',
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
