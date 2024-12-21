import React from 'react';
import './header.scss';
import headerLogo from '../../assets/images/logo.png';
import HamburgerMenu from '../ResponsiveMenu/HamburgerMenu';
export default function Header() {
  return (
    <nav className="header_nav">
      <img className="logo" src={headerLogo} alt="logo" />
      <ul className="nav__list">
        <li>
          <a href="#quecest"> Qu’est-ce que c’est ? </a>{' '}
        </li>

        <li>
          <a href="#pourquoi"> Pourquoi utiliser DEEDOMI ? </a>{' '}
        </li>

        <li>
          <a href="#chiffres"> Les chiffres clés </a>{' '}
        </li>

        <li>
          <a href="#fonctionnement"> Le fonctionnement </a>
        </li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
}
