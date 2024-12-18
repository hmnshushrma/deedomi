import React from 'react';
import './Quest.scss';
import CTAappButtons from '../CTAappButtons/CTAappButtons';

const Quest: React.FC = () => {
  return (
    <section className="quest">
      <div className="quest__container">
        <h3 className="quest__title">QU’EST-CE QUE C’EST ?</h3>
        <h1 className="quest__headline">
          <span className="quest__highlight">DEEDOMI</span>, C’EST BIEN PLUS
          QU’UNE SIMPLE APPLICATION.
        </h1>
        <p className="quest__description">
          Avec DEEDOMI, vous faites bien plus que donner vos vêtements. Vous
          participez à un mouvement écologique, en offrant à vos vêtements une
          seconde vie et en aidant ceux qui en ont besoin. En quelques clics,
          vous publiez une annonce, trouvez des intéressés près de chez vous et
          fixez un lieu de rendez-vous pour donner vos articles.
        </p>
        <CTAappButtons />
      </div>
    </section>
  );
};

export default Quest;
