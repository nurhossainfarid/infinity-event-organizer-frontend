import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import './Header.css';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
      };
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    return ( 
        <nav className={scrolled ? "scrolled" : ""}>
        <div className="mx-28">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><CustomLink to="/home">Home</CustomLink></li>
                        <li><CustomLink to="/about">About</CustomLink></li>
                        <li><CustomLink to="/services">Services</CustomLink></li>
                        <li><CustomLink to="/packages">Packages</CustomLink></li>
                        <li><CustomLink to="/organizers">Organizers</CustomLink></li>
                        <li><CustomLink to="/events">Events</CustomLink></li>
                        {
                            user && <li><CustomLink to={'/dashBoard'}>DashBoard</CustomLink></li>      
                        }
                    </ul>
                    </div>
                    <a className="btn btn-ghost bg-none normal-case text-xl">Infinity Event Organizer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><CustomLink to="/home">Home</CustomLink></li>
                        <li><CustomLink to="/about">About</CustomLink></li>
                        <li><CustomLink to="/services">Services</CustomLink></li>
                        <li><CustomLink to="/packages">Packages</CustomLink></li>
                        <li><CustomLink to="/organizers">Organizers</CustomLink></li>
                        <li><CustomLink to="/events">Events</CustomLink></li>
                        {
                            user && <li><CustomLink to={'/dashBoard'}>DashBoard</CustomLink></li>      
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <div className="flex gap-3">
                            <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                                <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li>
                                    {
                                        user ?
                                        <button class="btn btn-ghost" onClick={logout}>Sign Out</button> :
                                        <CustomLink to="/login">Login</CustomLink>
                                    }
                                </li>           
                                {
                                    user ? <></> : <li><CustomLink to="/registration">Registration</CustomLink></li>      
                                }
                                
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