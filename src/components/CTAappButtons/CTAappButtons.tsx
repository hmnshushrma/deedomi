import React from 'react';
import appleIcon from '../../assets/images/apple-logo.svg';
import playStoreIcon from '../../assets/images/play-store-logo.svg';

import './CTAAppButtons.scss';
function CTAappButtons() {
  return (
    <section className="cta-app-buttons">
      <a
        href="https://www.apple.com/app-store/"
        className="cta-button apple"
        aria-label="Télécharger sur l'App Store"
      >
        <img src={appleIcon} alt="App Store Icon" /> Télécharger sur l'App Store
      </a>
      <a
        href="https://play.google.com/"
        className="cta-button google"
        aria-label="Télécharger sur Google Play"
      >
        <img src={playStoreIcon} alt="Google Play Icon" />
        Télécharger sur Google Play
      </a>
    </section>
  );
}

export default CTAappButtons;
