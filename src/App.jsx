
function App() {

  return (
    <main>
    <section className="hero__container">
      <nav className="header_nav">
        <img className="logo" src="./assets/images/logo.png" alt="logo"/>
        <ul className="nav__list">
          <li> Qu’est-ce que c’est ? </li>
          <li> Pourquoi utiliser DEEDOMI ? </li>
          <li> Les chiffres clés </li>
          <li> Le fonctionnement </li>
        </ul>
      </nav>
  
      <div className="hero__container--text--container">
        <h1 className="hero__title">
          DONNEZ VOS VÊTEMENTS, FAITES UN GESTE POUR LA PLANÈTE.
        </h1>
  
        <p className="hero__description">
          Faites la différence dès aujourd&apos;hui. Réutilisez, partagez, et
          réduisez votre impact environnemental grâce à notre application mobile
          DEEDOMI.
        </p>
  
        <div className="hero__stats">
          <p>Déjà + de 10k vêtements donnés grâce à DEEDOMI !</p>
        </div>
  
        {/* <!-- <div className="hero__cta">
          <a href="https://www.apple.com/app-store/" className="cta-button apple" aria-label="Télécharger sur l'App Store">
            <img src="apple-icon.png" alt="App Store Icon" /> Télécharger sur
            l'App Store
          </a>
          <a href="https://play.google.com/" className="cta-button google" aria-label="Télécharger sur Google Play">
            <img src="google-play-icon.png" alt="Google Play Icon" />
            Télécharger sur Google Play
          </a>
        </div> --> */}
  
      </div>
  
    </section>
    <section className="operation__container">
      
    </section>
  </main>
  )
}

export default App
