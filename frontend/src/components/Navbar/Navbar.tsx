import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const handleCloseTopBar = () => {
    setIsTopBarVisible(false);
  };

  return (
    <>
      {isTopBarVisible && (
        <header className="top-bar">
          <p>
            Sign up and get 20% off to your first order. <Link to="/register">Sign Up Now</Link>
          </p>
          <button className="close-btn" onClick={handleCloseTopBar} aria-label="Close promotion">
            &times;
          </button>
        </header>
      )}

      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">SHOP.CO</Link>
          <ul className="nav-links">
            <li className="dropdown">
              <Link to="/shop">
                Shop <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </Link>
            </li>
            <li><Link to="/sale">On Sale</Link></li>
            <li><Link to="/new">New Arrivals</Link></li>
            <li><Link to="/brands">Brands</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search for products..." />
          </div>
          <Link to="/cart" className="icon-link" aria-label="Cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link to="/profile" className="icon-link" aria-label="Profile">
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;