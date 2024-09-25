import React from 'react';

function Header({ setIsPopup }) {
  return (
    <header>
      <h2 className="logo">LD Garage</h2>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contacts</a>
        <button className="btnLogin-popup" onClick={() => setIsPopup(true)}>Login</button>
      </nav>
    </header>
  );
}

export default Header;
