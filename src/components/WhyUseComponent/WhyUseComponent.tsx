import React from 'react';
import './WhyUse.scss';
import appImage from '../../assets/images/app-preview.png';
const WhyUseDeedomi = () => {
  return (
    <div className="why-deedomi">
      <h2 className="why-deedomi__title">
        Pourquoi utiliser{' '}
        <span className="why-deedomi__title--highlight">DEEDOMI</span> ?
      </h2>
      <div className="why-deedomi__content">
        <div className="why-deedomi__features">
          <div className="why-deedomi__feature">
            <div className="why-deedomi__icon why-deedomi__icon--recycle" />
            <p className="why-deedomi__text">RÉDUISEZ LE GASPILLAGE TEXTILE</p>
          </div>
          <div className="why-deedomi__feature">
            <div className="why-deedomi__icon why-deedomi__icon--leaf" />
            <p className="why-deedomi__text">
              DIMINUEZ LA POLLUTION POUR L’AVENIR
            </p>
          </div>
          <div className="why-deedomi__feature">
            <div className="why-deedomi__icon why-deedomi__icon--handshake" />
            <p className="why-deedomi__text">RENFORCEZ L’ENTRAIDE LOCALE</p>
          </div>
          <div className="why-deedomi__feature">
            <div className="why-deedomi__icon why-deedomi__icon--tshirt" />
            <p className="why-deedomi__text">
              DONNEZ UNE SECONDE VIE À VOTRE VÊTEMENT
            </p>
          </div>
        </div>
        <div className="why-deedomi__app-preview">
          <img
            src={appImage}
            alt="Deedomi App Preview"
            className="why-deedomi__image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUseDeedomi;
