import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setshowLogin }) => {
  const [menu, setmenu] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile toggle

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <Link
          to=""
          onClick={() => {
            setmenu("home");
            setMenuOpen(false);
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setmenu("menu");
            setMenuOpen(false);
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#Appdow"
          onClick={() => {
            setmenu("mobile-app");
            setMenuOpen(false);
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setmenu("contact");
            setMenuOpen(false);
          }}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <i
            onClick={toggleDarkMode}
            className="fa-solid fa-gear cursor-pointer text-2xl"
          ></i>
          <Link to="/card">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <button
            style={{ backgroundColor: "tomato" }}
            onClick={() => setshowLogin(true)}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
