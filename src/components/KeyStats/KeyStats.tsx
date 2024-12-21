import React from 'react';
import './KeyStats.scss';

interface StatsItem {
  value: string;
  description: string;
}

const statsData: StatsItem[] = [
  {
    value: '3%',
    description: 'Des vêtements sont réutilisés en France.',
  },
  {
    value: '54%',
    description: "Des vêtements sont exportés dans d'autres pays.",
  },
  {
    value: '80M',
    description:
      "Le Ghana achète chaque année pour 80 millions de dollars de vêtements d'occasion.",
  },
  {
    value: '10%',
    description: 'Des vêtements sont brûlés pour chauffer des habitations.',
  },
];

const KeyStats: React.FC = () => {
  return (
    <section className="key-stats" id="chiffres">
      <h2 className="key-stats__title">
        QUELQUES CHIFFRES CLÉS SUR LA SITUATION ACTUELLE
      </h2>
      <div className="key-stats__items">
        {statsData.map((stat, index) => (
          <div key={index} className="key-stats__item">
            <span className="key-stats__value">{stat.value}</span>
            <p className="key-stats__description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyStats;
