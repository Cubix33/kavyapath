import React from "react";
import '../styles/home.css';

const Home = () => {
  const poems = [
    {
      name: "Poem Title 1",
      poetPic: "/path/to/poet-pic.jpg",
      poetName: "Poet Name",
      country: "Country",
      lifespan: "1800-1900",
      preview: "This is the first line of the poem... and this is the second line.",
    },
    {
      name: "Poem Title 2",
      poetPic: "/path/to/poet-pic.jpg",
      poetName: "Poet Name",
      country: "Country",
      lifespan: "1800-1900",
      preview: "This is the first line of the poem... and this is the second line.",
    },
  ];

  return (
    <div className="home">
      {/* Top Poems of the Day */}
      <div className="top-poems">
        <h2>Top Poems of the Day</h2>
        <div className="poem-cards">
          {poems.map((poem, index) => (
            <div className="poem-card" key={index}>
              <div className="poem-header">
                <img src={poem.poetPic} alt={poem.poetName} className="poet-pic" />
                <div className="poem-info">
                  <h3>{poem.name}</h3>
                  <p>{poem.poetName} ({poem.country})</p>
                  <p>{poem.lifespan}</p>
                </div>
              </div>
              <p>{poem.preview}</p>
              <div className="poem-footer">
                <button className="follow-btn">Follow</button>
                <button className="like-btn">Like</button>
                <button className="share-btn">Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Did You Know */}
      <div className="did-you-know">
        <h2>Did You Know?</h2>
        <p>Interesting fact or trivia goes here...</p>
      </div>

      {/* Most Liked Writers */}
      <div className="most-liked-writers">
        <h2>Most Liked Writers of the Week</h2>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

