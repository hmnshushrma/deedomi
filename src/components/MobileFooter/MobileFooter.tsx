import React, { useState, useEffect } from 'react';
import './mobileFooter.scss';

interface AccordionSection {
  title: string;
  content: string[];
}

interface MobileFooterProps {
  data: any | null;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Check screen width to show accordion only below 1280px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // const data: AccordionSection[] = [
  //   {
  //     title: 'NAVIGATION',
  //     content: ['Qui sommes-nous ?', 'Le fonctionnement', 'Blog', 'Nous contacter'],
  //   },
  //   {
  //     title: 'AUTRES',
  //     content: ['Mentions légales', 'Politique de confidentialité', 'Conditions générales d’utilisation'],
  //   },
  //   {
  //     title: 'RÉSEAUX SOCIAUX',
  //     content: ['Facebook', 'Instagram', 'LinkedIn', 'X/Twitter'],
  //   },
  // ];

  if (!isMobile) return null; // Only render for mobile view

  return (
    <div className="accordion">
      {data.map((section: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; content: any[]; }, index: number) => (
        <div key={index} className="accordion__item">
          <div
            className="accordion__title"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            {section.title}
            <span className="accordion__title-icon">{activeIndex === index ? '^' : '>'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion__content">
              <ul className="accordion__content-list">
                {section.content.map((item, idx) => (
                  <li key={idx} className="accordion__content-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileFooter;