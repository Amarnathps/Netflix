import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="netflix-footer">
      <p className="footer-phone">
        Questions? Call <a href="tel:0008009191743">000-800-919-1743</a>
      </p>

      <div className="footer-links">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <select className="language-select">
          <option>English</option>
          <option>हिन्दी</option>
        </select>

        <p className="footer-region">Netflix India</p>

        <p className="footer-captcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span> Learn more.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;