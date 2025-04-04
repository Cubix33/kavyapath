import React, { useState } from 'react';
import '../styles/categories.css';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('poets'); // Default tab is 'poets'

  // Dummy Data (Can be replaced by real data)
  const poets = [
    {
      name: 'Rabindranath Tagore',
      country: 'India',
      lifespan: '1861-1941',
      image: '/path/to/poet-pic.jpg',
    },
    {
      name: 'William Wordsworth',
      country: 'England',
      lifespan: '1770-1850',
      image: '/path/to/poet-pic.jpg',
    },
    // Add more poets here
  ];

  const poems = [
    {
      title: 'Where the Mind is Without Fear',
      poet: 'Rabindranath Tagore',
      country: 'India',
      preview: 'Where the mind is without fear...',
    },
    {
      title: 'I Wandered Lonely as a Cloud',
      poet: 'William Wordsworth',
      country: 'England',
      preview: 'I wandered lonely as a cloud...',
    },
    // Add more poems here
  ];

  return (
    <div className="categories-page">
      {/* Tabs */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'poets' ? 'active' : ''}`}
          onClick={() => setActiveTab('poets')}
        >
          Poets
        </div>
        <div
          className={`tab ${activeTab === 'poems' ? 'active' : ''}`}
          onClick={() => setActiveTab('poems')}
        >
          Poems
        </div>
      </div>

      {/* Poets Tab Content */}
      {activeTab === 'poets' && (
        <div className="poets-content">
          <div className="search-container">
            <input type="text" placeholder="Search Poets..." className="search-input" />
          </div>
          <div className="cards-container">
            {poets.map((poet, index) => (
              <div className="card poet-card" key={index}>
                <img src={poet.image} alt={poet.name} className="poet-image" />
                <h3>{poet.name}</h3>
                <p>{poet.country}</p>
                <p>{poet.lifespan}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Poems Tab Content */}
      {activeTab === 'poems' && (
        <div className="poems-content">
          <div className="search-container">
            <input type="text" placeholder="Search Themes..." className="search-input" />
          </div>
          <div className="alphabet-filter">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
              <button key={letter} className="alphabet-button">
                {letter}
              </button>
            ))}
          </div>
          <div className="cards-container">
            {poems.map((poem, index) => (
              <div className="card poem-card" key={index}>
                <h3>{poem.title}</h3>
                <p>{poem.poet}</p>
                <p>{poem.country}</p>
                <p className="poem-preview">{poem.preview}</p>
                <div className="card-footer">
                  <button className="follow-btn">Follow</button>
                  <button className="like-btn">Like</button>
                  <button className="share-btn">Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;

