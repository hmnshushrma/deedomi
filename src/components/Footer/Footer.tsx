import React from "react";
import deemodiLogo from '../../assets/images/logo-brand.png'
import facebookIcon from '../../assets/images/facebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import linkedInIcon from '../../assets/images/linkedin.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import './footerStyles.scss'
const Footer = () => {
    const socialMediaDefinitions = [
        {
            id: 1,
            name: 'Facebook',
            icon: facebookIcon,
            link: 'https://www.facebook.com/deemodi'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: instagramIcon,
            link: 'https://www.facebook.com/deemodi'
        },
        {
            id: 3,
            name: 'LinkedIn',
            icon: linkedInIcon,
            link: 'https://www.facebook.com/deemodi'
        },
        {
            id: 4,
            name: 'X/Twitter',
            icon: twitterIcon,
            link: 'https://www.facebook.com/deemodi'
        },

    ]
    return (
        <section className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__download">
                        <img src={deemodiLogo} alt="deemodi logo" width="200px"/>
                        <p className="footer__download--text">L’application qui vous permet de donner une seconde vie à vos vêtements inutilisés tout en créant un impact positif pour votre communauté.</p>
                        <button className="footer__download--button">Télécharger l’application</button>
                    </div>
                    <div className="footer__navigation">
                        <h3 className="footer__navigation--title">Navigation</h3>
                        <ul className="footer__navigation--list" style={{ listStyleType: 'none' }}>
                            <li className="footer__navigation--list-item">Qui sommes-nous ?</li>
                            <li className="footer__navigation--list-item">Le fonctionnement</li>
                            <li className="footer__navigation--list-item">Blog</li>
                            <li className="footer__navigation--list-item">Nous contacter</li>
                        </ul>
                    </div>
                    <div className="footer__other">
                        <h3 className="footer__other--title">Autres</h3>
                        <ul className="footer__other--list" style={{ listStyleType: 'none' }}>
                            <li className="footer__other--list-item">Mentions légales</li>
                            <li className="footer__other--list-item">Politique de confidentialité</li>
                            <li className="footer__other--list-item">Conditions générales d’utilisation</li>
                        </ul>
                    </div>
                    <div className="footer__social-network">
                        <h3 className="footer__social-network--title">réseaux sociaux</h3>
                        {socialMediaDefinitions.map((socialMedia) => (
                            <div key={socialMedia.id} className="footer__social-network--item">
                                <div className="footer__social-network--link" onClick={() => window.open(socialMedia.link, '_blank')}>
                                    <img src={socialMedia.icon} alt={socialMedia.name} />
                                </div>
                                <span className="footer__social-network--name">{socialMedia.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer__copyright">© Copyright 2024, Tous droits réservés par DEEDOMI</div>
            </div>
        </section>
    );
}

export default Footer;