import '../styles/main.scss'
import Logo from '../assets/images/temp-lp-logo.svg'
const TemporaryLP = () => {

    return (
        <div className='temporary-landing-page'>
           <img src={Logo} height={'48px'}/>
            <p className='text'>NOTRE SITE ARRIVE BIENTÔT...<br/>
            MERCI DE VOTRE PATIENCE!
            </p>
        </div>
    );
}

export default TemporaryLP;