// eslint-disable-next-line no-unused-vars
import React from 'react';
import './hero.scss';
import image1 from '../../assets/images/img-1.png';
import image2 from '../../assets/images/img-2.png';
import image3 from '../../assets/images/img-3.png';
import CTAappButtons from '../CTAappButtons/CTAappButtons';
const HeroContainer = () => {
  return (
    <>
      <section className="hero__container">
        <div className="hero__container--text--container">
          <div className="hero__stats">
            <div className="hero__stats--images-icon">
              <img src={image1} className="images-icon-overlay" alt="" />
              <img src={image2} className="images-icon-overlay" alt="" />
              <img src={image3} className="images-icon-overlay" alt="" />
            </div>

            <p>Déjà + de 10k vêtements donnés grâce à DEEDOMI !</p>
          </div>
          <h1 className="hero__title">DONNEZ VOS VÊTEMENTS,</h1>
          <h1 className="hero__title">FAITES UN GESTE POUR LA PLANÈTE.</h1>

          <p className="hero__description">
            Faites la différence dès aujourd&apos;hui. Réutilisez, partagez, et
            réduisez votre impact environnemental grâce à notre application
            mobile DEEDOMI.
          </p>
        </div>
        <CTAappButtons />
      </section>
    </>
  );
};

export default HeroContainer;
