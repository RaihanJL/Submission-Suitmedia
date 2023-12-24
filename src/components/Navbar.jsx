import React from 'react';
import logoSuit from '../assets/images/logoSuit.png';
import { navLinks } from '../utils/links';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orangePrimary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://suitmedia.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoSuit} className="h-10" alt="Suitmedia Logo" />
        </a>
        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white/80 hover:text-white hover:scale-105 rounded-lg md:hidden ">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            {navLinks.map((navbar) => {
              return (
                <li key={navbar.id} className="">
                  <NavLink to={navbar.path} className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
                    <p className="pb-2">{navbar.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
