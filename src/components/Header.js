import { gsap } from "gsap";
import logo from "../images/logo_light.svg";
import profileLogo from "../images/profile.svg";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Header({ isLoggedIn, setIsLoggedIn, setFav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function ToggleBurgermenu() {
    setMenuOpen((old) => !old);
  }

  const menuRef = useRef();
  useEffect(() => {
    //gsap.from(menuRef.current, { x: -1500 });
    gsap.to(menuRef.current, { duration: 1, x: 0 });
  });

  const [profileOpen, setProfileOpen] = useState(false);

  function toggleProfilemenu() {
    setProfileOpen((old) => !old);
  }

  function logOut() {
    setIsLoggedIn(false);
    setFav([]);
    toggleProfilemenu();
  }

  return (
    <header id="nav-container">
      <nav id="nav">
        <div className="navbar">
          <Link id="home-logo-container" to="/">
            <img
              id="home-logo"
              className="header-logos"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div id="nav-web-right">
            <ul
              ref={menuRef}
              className={menuOpen ? null : "inactive"}
              id="nav-menu"
            >
              <li className="nav-item">
                <Link
                  id="header_link_1"
                  className="nav-link"
                  to="/artists"
                  onClick={ToggleBurgermenu}
                >
                  See Artists
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="header_link_2"
                  className="nav-link"
                  onClick={ToggleBurgermenu}
                  to="/program"
                >
                  See Program
                </Link>
              </li>
              <li className="nav-item">
                <a
                  id="home-program-link"
                  href="https://book-hwaiting.detblaarum.dk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy Tickets
                </a>
              </li>
            </ul>

            <div id="nav-right-side">
              <div className="hamburger" onClick={ToggleBurgermenu}>
                <span id="bar1" className={menuOpen ? "active1" : null}></span>
                <span id="bar2" className={menuOpen ? "active2" : null}></span>
                <span id="bar3" className={menuOpen ? "active3" : null}></span>
              </div>

              <div onClick={toggleProfilemenu} id="profile-logo-container">
                <img
                  className={profileOpen ? "open-profile" : null}
                  id="profile-logo"
                  src={profileLogo}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            id="profile-menu"
            //ref={profileRef}
            className={profileOpen ? null : "profile-inactive"}
          >
            {isLoggedIn ? (
              <>
                <div id="profile-link-wrapper">
                  <Link
                    id="myprofile-button"
                    onClick={toggleProfilemenu}
                    to="/account"
                  >
                    My Profile
                  </Link>
                </div>
                <p>You are currently logged in</p>
                <Link id="logout-button" onClick={logOut} to="/">
                  Logout
                </Link>
              </>
            ) : (
              <>
                {" "}
                <p>
                  You are currently <b>not</b> logged in
                </p>
                <Link
                  id="login-button"
                  onClick={toggleProfilemenu}
                  to="/account"
                >
                  Log in
                </Link>{" "}
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
