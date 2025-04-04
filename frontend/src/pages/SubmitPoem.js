// src/pages/SubmitPoem.js
import React, { useState } from 'react';

const SubmitPoem = () => {
  const [poem, setPoem] = useState({ penName: '', email: '', file: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(poem);
    // Add further form submission logic here
  };

  return (
    <div className="submit-poem">
      <h2>Submit Your Poem</h2>
      <form onSubmit={handleSubmit}>
        <label>PEN NAME:</label>
        <input type="text" onChange={(e) => setPoem({ ...poem, penName: e.target.value })} />

        <label>EMAIL:</label>
        <input type="email" onChange={(e) => setPoem({ ...poem, email: e.target.value })} />

        <label>FILE UPLOAD / UPLOAD TEXT:</label>
        <input type="file" onChange={(e) => setPoem({ ...poem, file: e.target.files[0] })} />

        <label>CATEGORY:</label>
        <select onChange={(e) => setPoem({ ...poem, category: e.target.value })}>
          <option value="love">Love</option>
          <option value="nature">Nature</option>
          <option value="devotion">Devotion</option>
        </select>

        <label>CAPTCHA:</label>
        <input type="text" placeholder="Enter CAPTCHA" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitPoem;

