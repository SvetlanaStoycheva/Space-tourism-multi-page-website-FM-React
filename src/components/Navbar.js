import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import { links } from '../utils';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();

  //
  const currentPath = window.location.pathname;
  const [activeBtn, setActiveBtn] = useState(currentPath);
  useEffect(() => {
    setActiveBtn(currentPath);
  }, [currentPath]);
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <div className='links-container'>
        <div className='navbar-line'></div>
        <ul className='navbar-links'>
          {links.map((l) => {
            const { id, url, text, number } = l;
            return (
              <li key={id} onClick={() => setActiveBtn(url)}>
                <Link to={url}>
                  <p
                    className={
                      activeBtn === url
                        ? 'navbar-link subheading1 navbar-link-active'
                        : 'navbar-link subheading1'
                    }
                  >
                    <span className='navbar-link-number'>{number}</span> {text}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {!isSidebarOpen && (
        <button
          type='button'
          className='nav-toggle-btn'
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
