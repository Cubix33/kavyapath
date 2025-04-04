import React, { useState } from 'react';
import '../styles/SubmitPoem.css';

const SubmitPoem = () => {
  const [poemName, setPoemName] = useState('');
  const [penName, setPenName] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [poemText, setPoemText] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("कविता सबमिट की गई", { poemName, penName, category, file, poemText });
  };

  return (
    <div className="submit-poem-container">
      <div className="submit-poem-card">
        <h2>कविता सबमिट करें ✍️📜</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>कविता का नाम</label>
            <input
              type="text"
              value={poemName}
              onChange={(e) => setPoemName(e.target.value)}
              required
              placeholder="कविता का नाम दर्ज करें"
            />
          </div>

          <div className="input-field">
            <label>कलम नाम (Pen Name)</label>
            <input
              type="text"
              value={penName}
              onChange={(e) => setPenName(e.target.value)}
              required
              placeholder="अपने कलम नाम दर्ज करें"
            />
          </div>

          <div className="input-field">
            <label>कविता श्रेणी</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">चुनें</option>
              <option value="प्रेम">प्रेम</option>
              <option value="विरह">विरह</option>
              <option value="देशभक्ति">देशभक्ति</option>
              <option value="सौंदर्य">सौंदर्य</option>
              <option value="दुख">दुख</option>
              <option value="प्रेरणा">प्रेरणा</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="input-field">
            <label>कविता का टेक्स्ट</label>
            <textarea
              value={poemText}
              onChange={(e) => setPoemText(e.target.value)}
              placeholder="अपनी कविता यहाँ लिखें"
              required
            />
          </div>

          <div className="input-field">
            <label>कविता फाइल अपलोड करें (Optional)</label>
            <input
              type="file"
              accept=".txt,.doc,.docx,.pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="submit-btn">कविता सबमिट करें</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitPoem;

