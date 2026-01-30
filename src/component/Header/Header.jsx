import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


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
            <option>Tamil</option>
          </select>
        </div>

        <button className="signin-btn"><Link to="/signup" className='link-btn'>Sign up</Link></button>
      </div>
    </header>
  );
}



export default Header
