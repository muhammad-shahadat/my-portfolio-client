import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // FaTimes যোগ করা হয়েছে ক্লোজ আইকনের জন্য
import { HashLink } from "react-router-hash-link";

import "./Header.css";
import navLogo from "../../assets/images/nav-logo.png";

const Header = () => {
  const [isExpandMenu, setIsExpandMenu] = useState(false);
  const menuListRef = useRef(null);

  useEffect(() => {
    if (menuListRef.current) {
      menuListRef.current.style.maxHeight = isExpandMenu ? "320px" : "0px";
    }
  }, [isExpandMenu]);

  const toggleMenu = () => {
    setIsExpandMenu(!isExpandMenu);
  };

  // মোবাইল মেনুর যেকোনো লিংকে ক্লিক করলে মেনু অটোমেটিক বন্ধ হয়ে যাবে
  const closeMenu = () => {
    setIsExpandMenu(false);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar-logo">
            <div className="logo">
              <HashLink smooth to="#hero" onClick={closeMenu}>
                <img src={navLogo} alt="Shahadat Portfolio Logo" />
              </HashLink>
            </div>
          </div>
          
          <div className="navbar-menu">
            <ul className="menu-list" ref={menuListRef}>
              <li>
                <HashLink smooth to="#hero" onClick={closeMenu}>Home</HashLink>
              </li>
              <li>
                <HashLink smooth to="#about-me" onClick={closeMenu}>About Me</HashLink>
              </li>
              <li>
                <HashLink smooth to="#projects" onClick={closeMenu}>Projects</HashLink>
              </li>
              <li>
                <HashLink smooth to="#skills" onClick={closeMenu}>Skills</HashLink>
              </li>
              <li>
                <HashLink smooth to="#resume" onClick={closeMenu}>Resume</HashLink>
              </li>
              <li>
                <HashLink smooth to="#contacts" onClick={closeMenu}>Contacts</HashLink>
              </li>
            </ul>
          </div>

          <div className="hamburger-icon">
            <button onClick={toggleMenu} aria-label="Toggle navigation">
              {/* মেনু ওপেন থাকলে 'X' আইকন দেখাবে, বন্ধ থাকলে 'Bars' আইকন দেখাবে */}
              {isExpandMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>  
    </>
  );
}

export default Header;