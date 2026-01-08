import React, { useEffect, useRef, useState } from 'react';
import "./Header.css";
import  {FaBars } from "react-icons/fa";
import {HashLink} from "react-router-hash-link"
import navLogo from "../../assets/images/nav-logo.png";




const Header = () => {


    const [isExpandMenu, setIsExpandMenu] = useState(false);
    const menuListRef = useRef(null);


    useEffect(() =>{
        if (menuListRef.current) {
            menuListRef.current.style.maxHeight = isExpandMenu ? "300px" : "0px";
        }
        
    }, [isExpandMenu]);
    
    const toggleMenu = () =>{
        setIsExpandMenu(!isExpandMenu);
        
    }

  return (
    <>
        <nav>
            <div className="navbar">
                <div className="navbar-logo">
                    <div className="logo">
                        <img src={navLogo} alt="" />
                    </div>
                </div>
                <div className="navbar-menu">
                    <ul className="menu-list" ref={menuListRef} >
                        <li>
                            <HashLink smooth to="#hero">
                                Home 
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#about-me">
                                About Me
                            </HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#projects">
                                Projects

                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="#skills">
                                Skills

                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="#resume">
                                Resume

                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="#contacts">
                                Contacts
                            </HashLink>
                        </li>
                        
                            
                    </ul>
                </div>
                <div className="hamburger-icon">
                    <button onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>
        </nav>  
    
    </>
  )
}

export default Header;