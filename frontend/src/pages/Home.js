import React from "react";
import '../styles/home.css';

const Home = () => {
  const poems = [
    {
      name: "प्रेम की कविता",
      poetPic: "/path/to/poet1.jpg",
      poetName: "सूर्यकांत त्रिपाठी 'निराला'",
      country: "भारत",
      lifespan: "1896-1961",
      preview: "प्रेम में अटूट विश्वास हो, बस इतना ही काफ़ी है...",
    },
    {
      name: "विरह की व्यथा",
      poetPic: "/path/to/poet2.jpg",
      poetName: "महादेवी वर्मा",
      country: "भारत",
      lifespan: "1907-1987",
      preview: "नयन तुम्हारे अश्रु बहाते, मैं मौन खड़ी देखती रहूँ...",
    },
    {
      name: "देशभक्ति का गीत",
      poetPic: "/path/to/poet3.jpg",
      poetName: "रामधारी सिंह 'दिनकर'",
      country: "भारत",
      lifespan: "1908-1974",
      preview: "खून से लथपथ मातृभूमि, तेरा मान बढ़ाएँगे...",
    },
    {
      name: "सौंदर्य का चित्रण",
      poetPic: "/path/to/poet4.jpg",
      poetName: "जयशंकर प्रसाद",
      country: "भारत",
      lifespan: "1889-1937",
      preview: "चंद्रमा की चाँदनी में खिलती हुई वह हंसिनी...",
    },
  ];

  const poets = [
    {
      poetPic: "/path/to/poet1.jpg",
      poetName: "सूर्यकांत त्रिपाठी 'निराला'",
      country: "भारत",
      lifespan: "1896-1961",
    },
    {
      poetPic: "/path/to/poet2.jpg",
      poetName: "महादेवी वर्मा",
      country: "भारत",
      lifespan: "1907-1987",
    },
    {
      poetPic: "/path/to/poet3.jpg",
      poetName: "रामधारी सिंह 'दिनकर'",
      country: "भारत",
      lifespan: "1908-1974",
    },
    {
      poetPic: "/path/to/poet4.jpg",
      poetName: "जयशंकर प्रसाद",
      country: "भारत",
      lifespan: "1889-1937",
    },
  ];

  return (
    <div className="home">
      {/* 📖 शीर्ष कविताएँ */}
      <div className="top-poems">
        <h2>📖 आज की शीर्ष कविताएँ</h2>
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
                <button className="follow-btn">📌 फ़ॉलो करें</button>
                <button className="like-btn">❤️ पसंद</button>
                <button className="share-btn">📤 साझा करें</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ℹ️ क्या आप जानते हैं? */}
      <div className="did-you-know">
        <h2>ℹ️ क्या आप जानते हैं?</h2>
        <p>महादेवी वर्मा को हिंदी साहित्य की "सरस्वती" कहा जाता है।</p>
      </div>

      {/* ✨ सबसे अधिक पसंद किए गए कवि */}
      <div className="most-liked-writers">
        <h2>✨ सप्ताह के सबसे पसंद किए गए कवि</h2>
        <div className="poem-cards">
          {poets.map((poet, index) => (
            <div className="poem-card" key={index}>
              <div className="poem-header">
                <img src={poet.poetPic} alt={poet.poetName} className="poet-pic" />
                <div className="poem-info">
                  <h3>{poet.poetName}</h3>
                  <p>{poet.country}</p>
                  <p>{poet.lifespan}</p>
                </div>
              </div>
              <div className="poem-footer">
                <button className="follow-btn">📌 फ़ॉलो करें</button>
                <button className="like-btn">❤️ पसंद</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

