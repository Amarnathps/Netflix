import React from 'react'
import './Header.css'


function Header() {
  return (
     

    
    <header className="header">

      
      
      <img
        className="netflix-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      />

    
      <div className="header-actions">
        <div className="language-box">
          <span>🌐</span>
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
}



export default Header
