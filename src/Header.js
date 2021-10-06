import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
            <li className="navbar-logo" onClick={closeMobileMenu}>
                Music
                <i class="fab fa-typo3" />
              </li>
              <li className="navbar-logo1" onClick={closeMobileMenu}>
                &
                <i class="fab fa-typo3" />
              </li>
              <li className="navbar-logo2" onClick={closeMobileMenu}>
                Beats
                <i class="fab fa-typo3" />
              </li>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links3" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-links2">
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
              <li className="navbar-logo" onClick={closeMobileMenu}>
                Music
                <i class="fab fa-typo3" />
              </li>
              <li className="navbar-logo1" onClick={closeMobileMenu}>
                &
                <i class="fab fa-typo3" />
              </li>
              <li className="navbar-logo2" onClick={closeMobileMenu}>
                Beats
                <i class="fab fa-typo3" />
              </li>
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
              <div className="nav-item-logout">
                <LogoutButton onClick={closeMobileMenu} />
                </div>
            </div>
          </nav>
        </>
      }
    </>
  );
}

export default Header;