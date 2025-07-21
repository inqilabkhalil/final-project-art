import React, { useState } from 'react';
import Cart from '../Svg/Cart';
import Search from '../Svg/Search';
import './Header.scss';
import Linkcomp from '../Link/Linkcomp';
import List from '../Svg/List';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-div">

        <div className="logo">
          <img src="http://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="Logo" />
        </div>

        <div className="center-nav">
          <Linkcomp>
            <nav className="link-nav">
              <ul>
                <li><Link to="/shopcategory">Shop Category</Link></li>
                <li><Link to="/productdetails">Product Details</Link></li>
                <li><Link to="/productcheckout">Product Checkout</Link></li>
                <li><Link to="/confirmation">Confirmation</Link></li>
                <li><Link to="/shoppingcart">Shopping Cart</Link></li>
              </ul>
            </nav>
          </Linkcomp>
        </div>

        <div className="right-header">
          <div className="search-bar">
            <Search />
            <Cart />
          </div>
          <p className="buysec">Buy Now</p>

          <div className="list-bar" onClick={() => setMenuOpen(!menuOpen)}>
            <List />
          </div>
        </div>

        {/* Mobil menyu */}
        <div className={`mobile-links ${menuOpen ? 'open' : ''}`}>
          <Linkcomp colheader>
            <nav className="link-nav">
              <ul>
                <li><Link to="/shopcategory">Shop Category</Link></li>
                <li><Link to="/productdetails">Product Details</Link></li>
                <li><Link to="/productcheckout">Product Checkout</Link></li>
                <li><Link to="/confirmation">Confirmation</Link></li>
                <li><Link to="/shoppingcart">Shopping Cart</Link></li>
              </ul>
            </nav>
          </Linkcomp>

          <div className="mobile-actions">
            <Search />
            <Cart />
            <p className="buysec">Buy Now</p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
