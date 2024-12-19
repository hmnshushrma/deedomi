// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroContainer from './components/HeroSection/HeroContainer';
import Header from './components/Header/Header';
import Quest from './components/Quest/Quest';
import WhyUseDeedomi from './components/WhyUseComponent/WhyUseComponent';
import './styles/main.scss';
function App() {
  return (
    <div className="page__container">
      <Header />
      <HeroContainer />
      <Quest />
      <WhyUseDeedomi />
    </div>
  );
}

export default App;
