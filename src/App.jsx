import React from 'react';
import HeroContainer from './components/HeroSection/HeroContainer';
import Header from './components/Header/Header';
import './styles/main.scss';
function App() {
  return (
    <div className="page__container">
      <Header />
      <HeroContainer />
    </div>
  );
}

export default App;
