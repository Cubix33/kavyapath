// src/components/Banner.js
import React from 'react';
import '../styles/banner.css';  // Import banner-specific CSS

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Shloka of the Day</h1>
        <p className="shloka-text">"ॐ गण गणपतये नमः"</p>
      </div>
    </section>
  );
};

export default Banner;

