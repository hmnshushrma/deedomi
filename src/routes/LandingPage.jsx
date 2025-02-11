import HeroContainer from '../components/HeroSection/HeroContainer';
import Header from '../components/Header/Header';
import Quest from '../components/Quest/Quest';
import WhyUseDeedomi from '../components/WhyUseComponent/WhyUseComponent';
import KeyStats from '../components/KeyStats/KeyStats';
import '../styles/main.scss';
import OperationsComponent from '../components/Operations/OperationsComponent';
import Footer from '../components/Footer/Footer';
const LandingPage = () => {
    return (
        <div className="page__container">
            <Header />
            <HeroContainer />
            <Quest />
            <WhyUseDeedomi />
            <KeyStats />
            <OperationsComponent />
            <Footer />
        </div>
    );
}

export default LandingPage;