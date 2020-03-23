import React from 'react';

import './StyleButtons.css';

let switchStyle = 5;

function StyleButtons() {
  return (
    <div className='StyleButtons'>
      <button onClick={switchStyle}>
        1
      </button>
      <button onClick={switchStyle}>
        2
      </button>
      <button onClick={switchStyle}>
        3
      </button>
      <button onClick={switchStyle}>
        4
      </button>
    </div>
  );
}

export default StyleButtons;