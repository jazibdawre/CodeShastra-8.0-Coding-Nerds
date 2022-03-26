import React, { useState } from "react";
import "./header.css";
import Button from "../Button";
import {useHistory} from 'react-router-dom'

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };
  const history=useHistory();

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="max-width flex header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="header-logo"
          alt="cred"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <Button buttonText="Login" onClick={()=>history.push('/login')}/>
          <span style={{marginRight:'20px'}}></span>
          <Button buttonText="Sign Up" onClick={()=>history.push('/register')}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
