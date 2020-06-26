import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>
    <div className="options">
      <div className="option">
        <Link to="/shop">SHOP</Link>
      </div>
      <div className="option">
        <Link to="/contact">CONTACT</Link>
      </div>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        <div className="option">
          <Link to="/signin">SIGN IN</Link>
        </div>
      )}
    </div>
  </div>
);

export default Header;
