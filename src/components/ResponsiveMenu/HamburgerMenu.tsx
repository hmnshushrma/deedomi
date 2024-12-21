import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import './hamburgerMenu.scss';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className={`menu ${isOpen ? 'visible' : ''}`}>
        <ul className="menu__list">
          <a href="#quecest">
            <li>Qu’est-ce que c’est ?</li>
          </a>
          <a href="#pourquoi">
            <li>Pourquoi utiliser DEEDOMI ?</li>
          </a>
          <a href="#chiffres">
            <li>Les chiffres clés</li>
          </a>
          <a href="#fonctionnement">
            <li>Le fonctionnement</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
