import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
   <div className="nav">
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      />
      <div className="nav-menu">
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>New & Popular</span>
        <span>My List</span>
      </div>
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      />
    </div>
  )
}

export default Home






