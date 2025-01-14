import React, { useState, useEffect } from 'react';
import './header.scss';
import headerLogo from '../../assets/images/deemodi-logo-white.svg';
import HamburgerMenu from '../ResponsiveMenu/HamburgerMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

    };

    window.addEventListener('scroll', handleScroll);
    console.log('something happened')
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`header_nav ${isScrolled ? 'scrolled' : ''}`}>
      <img className="logo" src={headerLogo} alt="logo" />
      <ul className="nav__list">
        <li>
          <a href="#quecest"> Qu’est-ce que c’est ? </a>
        </li>
        <li>
          <a href="#pourquoi"> Pourquoi utiliser DEEDOMI ? </a>
        </li>
        <li>
          <a href="#chiffres"> Les chiffres clés </a>
        </li>
        <li>
          <a href="#fonctionnement"> Le fonctionnement </a>
        </li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
}
