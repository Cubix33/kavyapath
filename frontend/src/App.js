import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Categories from './pages/Categories';
import SubmitPoem from './pages/SubmitPoem';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home'; // You can create a Home component as well
import './styles/App.css';
import './styles/Navbar.css';
import './styles/Banner.css';
import './styles/Footer.css';
import './styles/Categories.css';
import './styles/SubmitPoem.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assume user is not logged in initially

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <Navbar isLoggedIn={isLoggedIn} />
        
        {/* Banner */}
        <Banner />

        {/* Main content */}
        <main>
           <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/submit-poem" element={<SubmitPoem />} />
	  <Route path="/login" element={<Login />} />
	  <Route path="/signup" element={<Signup />} />
	  {/*   <Route path="/profile" element={<UserProfile />} /> */}
    </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

