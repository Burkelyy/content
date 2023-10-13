import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     <p className="footer-text">@2022 AShakulia</p>
     <div className="footer-themes-toggle">
        <span className='footer-themes-toggle-title'>Dark Theme</span>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
     </div>
    </footer>
  )
}

export { Footer };