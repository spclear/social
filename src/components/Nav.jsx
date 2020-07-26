import React from 'react';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__nav-list nav-list'>
        <li className='nav__item nav-list__item'>
          <a className='nav__link nav-list__link' href='#'>
            Profile
          </a>
        </li>
        <li className='nav__item nav-list__item'>
          <a className='nav__link nav-list__link' href='#'>
            Messages
          </a>
        </li>
        <li className='nav__item nav-list__item'>
          <a className='nav__link nav-list__link' href='#'>
            News
          </a>
        </li>
        <li className='nav__item nav-list__item'>
          <a className='nav__link nav-list__link' href='#'>
            Music
          </a>
        </li>
      </ul>
      <div className='nav__settings'>
        <a className='nav__link' href='#'>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default Nav;