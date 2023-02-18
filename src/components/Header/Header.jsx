import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";
import { FcBusinessman } from "react-icons/fc";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [user] = useAuthState(auth);
  const [collectUser, setCollectUser] = useState();

  useEffect(() => {
      const email = user?.email;
      if (email) {
          fetch(`https://infinity-event-organizer-backend.vercel.app/v1/user/role/${email}`, {
              method: 'GET',
              headers: {
                  'content-type': 'application/json',
                  authorization: `Bear ${localStorage.getItem('accessToken')}`
              },
          })
              .then(res => res.json())
              .then(data => {
                setCollectUser(data.data);
              })
      }
  }, [user]);
  // const str = 'The quick brown fox jumps over the lazy dog.';
  // console.log(str.slice(0, 2));
  const firstNm = collectUser?.firstName.slice(0,1);
  const lastNm = collectUser?.lastName.slice(0, 1);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="lg:mx-28 md:mx-2">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 
                res-nav"
              >
                <li>
                  <CustomLink to="/home">Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/about">About</CustomLink>
                </li>
                <li>
                  <CustomLink to="/services">Services</CustomLink>
                </li>
                <li>
                  <CustomLink to="/packages">Packages</CustomLink>
                </li>
                <li>
                  <CustomLink to="/organizers">Organizers</CustomLink>
                </li>
                <li>
                  <CustomLink to="/events">Events</CustomLink>
                </li>
                {user && (
                  <li>
                    <CustomLink to={"/dashBoard"}>DashBoard</CustomLink>
                  </li>
                )}
              </ul>
            </div>
            <Link to="/home" className="bg-none normal-case text-md md:text-xl font-semibold">
              Infinity Event Organizer
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <CustomLink to="/home">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/about">About</CustomLink>
              </li>
              <li>
                <CustomLink to="/services">Services</CustomLink>
              </li>
              <li>
                <CustomLink to="/packages">Packages</CustomLink>
              </li>
              <li>
                <CustomLink to="/organizers">Organizers</CustomLink>
              </li>
              <li>
                <CustomLink to="/events">Events</CustomLink>
              </li>
              {
                !user &&
                <li>
                    <CustomLink to="/login">Login</CustomLink>
                </li>
              }
              {
                !user &&
                <li>
                  <CustomLink to="/registration">Registration</CustomLink>
                </li>
              }

              {user && (
                <li>
                  <CustomLink to={"/dashBoard"}>DashBoard</CustomLink>
                </li>
              )}
            </ul>
          </div>
          <div className="md:navbar-end">
            <div>
              <div className="flex gap-3">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex="0"
                    className="btn btn-circle avatar border-none"
                  >
                    <div className="bg-white text-neutral-content rounded-full w-full"> 
                      {!user ? <p className="text-3xl mt-1"></p> : <p className="text-3xl mt-1">{firstNm + 
                       lastNm}</p>}
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">Update</span>
                      </Link>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      {user && (
                        <button className="btn btn-ghost" onClick={logout}>
                          Sign Out
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
