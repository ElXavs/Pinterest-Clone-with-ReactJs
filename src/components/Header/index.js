import React from 'react';

// import { MdSearch } from 'react-icons/md';

import PinterestIcon from '../../assets/svg/PinterestIcon';
import SearchIcon from '../../assets/svg/SearchIcon';
import NotifyIcon from '../../assets/svg/NotifyIcon';
import MessageIcon from '../../assets/svg/MessageIcon';
import ArrowBottomIcon from '../../assets/svg/ArrowBottomIcon';

import Nav from './styles';

const Header = () => {
  return (
    <header>
      <Nav>
        <ul>
          <li><i><PinterestIcon /></i></li>
          <li>Inicio</li>
          <li>Hoy</li>
          <li>Siguiendo</li>
          <li className='Nav__input'>
            <div>
              <SearchIcon />
              <input type='text' placeholder='Buscar' />
            </div>

          </li>
          <li><i><NotifyIcon /></i></li>
          <li><i><MessageIcon /></i></li>
          <li><i><PinterestIcon /></i></li>
          <li><i><ArrowBottomIcon /></i></li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header;
