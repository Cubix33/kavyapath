import React, { useState } from "react";
import "../styles/categories.css";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("poets");
  const [selectedTheme, setSelectedTheme] = useState("all");

  const themes = [
    "प्रेम", "विरह", "देशभक्ति", "सौंदर्य", "धर्म", "मुक्ति", "शांति"
  ];

  const poemsByTheme = {
    प्रेम: [
      {
        title: "प्रेम की कविता",
        poet: "सूर्यकांत त्रिपाठी 'निराला'",
        country: "भारत",
        preview: "प्रेम में अटूट विश्वास हो, बस इतना ही काफ़ी है...",
      },
      {
        title: "प्रेम का गीत",
        poet: "महादेवी वर्मा",
        country: "भारत",
        preview: "प्रेम सच्चा हो तो दिल में गूंजे...",
      },
    ],
    विरह: [
      {
        title: "विरह की व्यथा",
        poet: "महादेवी वर्मा",
        country: "भारत",
        preview: "नयन तुम्हारे अश्रु बहाते, मैं मौन खड़ी देखती रहूँ...",
      },
    ],
    // More themes can be added similarly
    all: [
      {
        title: "मनुष्य की महिमा",
        poet: "हरिवंशराय बच्चन",
        country: "भारत",
        preview: "इस जीवन में जिसने जैसा भी बोया...",
      },
      {
        title: "कविता का संसार",
        poet: "महादेवी वर्मा",
        country: "भारत",
        preview: "शब्दों के दीप जलाकर देखो...",
      },
    ]
  };

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
    <div className="categories-page">
      {/* Tabs */}
      <div className="tabs">
        <div className={`tab ${activeTab === "poets" ? "active" : ""}`} onClick={() => setActiveTab("poets")}>
          कवि
        </div>
        <div className={`tab ${activeTab === "poems" ? "active" : ""}`} onClick={() => setActiveTab("poems")}>
          कविताएँ
        </div>
      </div>

      {/* Themes */}
      {activeTab === "poems" && (
        <div className="themes-section">
          <h2>थीम चुनें:</h2>
          <div className="theme-buttons">
            {themes.map((theme) => (
              <button
                key={theme}
                className={`theme-button ${selectedTheme === theme ? "active" : ""}`}
                onClick={() => setSelectedTheme(theme)}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Poets Section */}
      {activeTab === "poets" && (
        <div className="poets-content">
          <div className="cards-container">
            {poets.map((poet, index) => (
              <div className="card poet-card" key={index}>
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
      )}

      {/* Poems Section */}
      {activeTab === "poems" && (
        <div className="poems-content">
          <div className="cards-container">
            {poemsByTheme[selectedTheme].map((poem, index) => (
              <div className="card poem-card" key={index}>
                <div className="poem-header">
                  <div className="poem-info">
                    <h3>{poem.title}</h3>
                    <p>{poem.poet}</p>
                    <p>{poem.country}</p>
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
      )}
    </div>
  );
};

export default Categories;

