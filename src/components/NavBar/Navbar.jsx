import React from "react";
import logo from "../Assets/logo.png";
import "./Navbar.scss";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Config";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./BurgerMenu";
import "./Navbar.scss";
const Navbar = ({ user }) => {
  const Phone = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const Desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const history = useNavigate();
  const handleLogout = () => {
    auth.signOut().then(() => {
      history("/login");
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-container-desktop">
        <div className="navbar-container-desktop-content">
          <img
            src={logo}
            className="navbar-container-desktop-content-image"
            alt="default"
          />
          <h2 className="navbar-container-desktop-content-title">
            MACIEJ WAWRYSZUK
          </h2>
        </div>
        <ul className="navbar-container-desktop-table">
          <li className="navbar-container-desktop-table-list-link">
            <a
              className="navbar-container-desktop-table-list-link"
              to="about"
              smooth="true"
              duration={1800}
            >
              <div className="navbar-container-desktop-table-list-link-title">
                About Me
              </div>
            </a>
          </li>

          <li className="navbar-container-desktop-table-list-link">
            <a
              className="navbar-container-desktop-table-list-link"
              to="education"
              smooth="true"
              duration={1800}
            >
              <div className="navbar-container-desktop-table-list-link-title">
                Education
              </div>
            </a>
          </li>

          <li className="navbar-container-desktop-table-list-link">
            <a
              className="navbar-container-desktop-table-list-link"
              to="learn"
              smooth="true"
              duration={1800}
            >
              <div className="navbar-container-desktop-table-list-link-title">
                Can Do
              </div>
            </a>
          </li>

          <li className="navbar-container-desktop-table-list-link">
            <a
              className="navbar-container-desktop-table-list-link"
              to="projeects"
              smooth="true"
              duration={1800}
            >
              <div className="navbar-container-desktop-table-list-link-title">
                Projects
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
{
  /* {!user && (
          <div className="appBar">
            <Link to="login/register" className="navlinkss">
              Zarejestruj się
            </Link>
            <Link to="login" className="navlinks">
              Zaloguj się
            </Link>
          </div>
        )}
        {user && (
          <div className="appBar">
            <span>
              <Navigation />
            </span>
            <span>
              <button className="logout-btn" onClick={handleLogout}>
                Wyloguj
              </button>
            </span>
          </div>
        )} */
}
