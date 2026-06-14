import React from 'react';
import "./Footer.css";

const Footer = () => {
  // অটোমেটিক কারেন্ট সাল জেনারেট করার জন্য
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <div className="footer-container">
          <p>
            &copy; {currentYear} <span className="footer-brand">Shahadatian</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;