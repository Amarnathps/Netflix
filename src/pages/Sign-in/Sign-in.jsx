import React from "react";
import "./Sign-in.css";

export default function Signin() {
  return (
    <div className="signin-bg">
      <header className="signin-header">
        <img
          className="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
      </header>

      <div className="signin-card">
        <h1>Enter your information to sign in</h1>
        <p>Or start with a new account.</p>

        <div className="signin-input">
          <input type="email" placeholder="Email or mobile number" />
          <button>
            Continue <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
