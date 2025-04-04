// src/components/TopPoemCard.js
import React from 'react';

const TopPoemCard = ({ poem }) => {
  return (
    <div className="top-poem-card">
      <img src={poem.poetPic} alt="Poet" className="poet-pic" />
      <h3>{poem.name}</h3>
      <p>{poem.poetName} | {poem.country} | {poem.lifespan}</p>
      <p>{poem.preview}</p>
      <div className="actions">
        <button>Follow</button>
        <button>Like</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default TopPoemCard;

