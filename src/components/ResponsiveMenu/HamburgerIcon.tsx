import React from 'react';
import './hamburgerIcon.scss';

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <div
      className={`hamburger-icon ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
