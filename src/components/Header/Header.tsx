import React from 'react';
import './header.scss';
import headerLogo from '../../assets/images/logo.png';
export default function Header() {
  return (
    <nav className="header_nav">
      <img className="logo" src={headerLogo} alt="logo" />
      <ul className="nav__list">
        <a href='#quecest'><li> Qu’est-ce que c’est ? </li></a>
        <a href='#pourquoi'><li> Pourquoi utiliser DEEDOMI ? </li></a>
        <a href='#chiffres'><li> Les chiffres clés </li></a>
        <a href='#fonctionnement'><li> Le fonctionnement </li></a>
      </ul>
    </nav>
  );
}
