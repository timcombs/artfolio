import React from 'react';

import './ArtFilter.css';

const switchStyle = 'to keep linter from being mad'

function ArtFilter() {

  return (
    <div className='filter-container'>
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
      <button onClick={switchStyle}>
        5
      </button>
    </div>
  );
}

export default ArtFilter;