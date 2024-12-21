import React, { useState, useEffect } from 'react';
import './mobileFooter.scss';

interface AccordionSection {
  title: string;
  content: string[];
}

interface MobileFooterProps {
  data: AccordionSection[];
}

const MobileFooter: React.FC<MobileFooterProps> = ({ data }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  if (!isMobile) return null;

  return (
    <div className="accordion">
      {data.map((section, index) => (
        <div key={index} className="accordion__item">
          <div
            className="accordion__title"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className="accordion__title-text">{section.title}</span>
            <span
              className={`accordion__title-icon ${activeIndex === index ? 'expanded' : ''
                }`}
            ></span>
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
