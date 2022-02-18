import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils';
import { useGlobalContext } from '../context';

const Sitebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <ul className='sidebar-links'>
        {links.map((l) => {
          const { id, url, text, number } = l;
          return (
            <li key={id}>
              <Link to={url}>
                <p className='sidebar-link subheading1'>
                  <span className='sidebar-link-number'>{number}</span> {text}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sitebar;
