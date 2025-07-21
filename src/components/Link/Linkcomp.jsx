import React from 'react';
import { Link } from 'react-router-dom';
import './Link.scss';

const Linkcomp = ({ children, colfoot = false, colheader }) => {
  return (
    <div className={`linkComps-container ${colfoot ? 'colfoot' : ''} ${colheader ? 'colheader' : ''} `}>
      <Link to="/" className="main-link normal-link">Home</Link>

      <div className="shop-hover-area">
        <Link className="normal-link">Shop</Link>
        {children}
      </div>

      <Link to="/contact" className="normal-link">Contact</Link>
    </div>
  );
};

export default Linkcomp;
