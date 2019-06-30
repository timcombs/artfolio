import React from 'react';

import './Txt.css';

function Txt({ card }) {
  return (
      <p>{card.text}</p>
    );
}

export default Txt