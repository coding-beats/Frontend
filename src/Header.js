import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Header.css";
import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated)

  return (

    <>
      {!isAuthenticated &&
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Music&beats
                <i class="fab fa-typo3" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links2" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-links">
                  <LoginButton onClick={closeMobileMenu} />
                </li>
              </ul>
            </div>
          </nav>
        </>
      }
      {isAuthenticated &&
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Music&beats
                <i class="fab fa-typo3" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/MusicList" className="nav-links" onClick={closeMobileMenu}>
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/FavoirteList"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Favoirte List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/AboutUs"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    AboutUs
                  </Link>
                </li>
              </ul>
              <li className="nav-item-logout">
                <LogoutButton onClick={closeMobileMenu} />
              </li>
            </div>
          </nav>
        </>
      }
    </>
  );
}

export default Header;
