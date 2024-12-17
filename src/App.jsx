import HeroContainer from './components/HeroSection/HeroContainer'
import './styles/main.scss'
function App() {

  return (
    <div className="page__container">
      <nav className="header_nav">
        <img className="logo" src="./assets/images/logo.png" alt="logo"/>
        <ul className="nav__list">
          <li> Qu’est-ce que c’est ? </li>
          <li> Pourquoi utiliser DEEDOMI ? </li>
          <li> Les chiffres clés </li>
          <li> Le fonctionnement </li>
        </ul>
      </nav>
      <HeroContainer />
    </div>
  )
}

export default App
