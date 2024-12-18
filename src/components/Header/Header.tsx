import React from 'react';
import './header.scss';
import headerLogo from '../../assets/images/logo.png';
export default function Header() {
  return (
    <nav className="header_nav">
      <img className="logo" src={headerLogo} alt="logo" />
      <ul className="nav__list">
        <li> Qu’est-ce que c’est ? </li>
        <li> Pourquoi utiliser DEEDOMI ? </li>
        <li> Les chiffres clés </li>
        <li> Le fonctionnement </li>
      </ul>
    </nav>
  );
}
