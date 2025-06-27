import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/" onClick={closeMenu}>Murat Oney</Link>
                </div>
                <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/projects" 
                            className={`nav-link ${isActiveLink('/projects') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/photography" 
                            className={`nav-link ${isActiveLink('/photography') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Photography
                        </Link>
                    </li>
                </ul>
                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 