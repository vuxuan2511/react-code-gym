import './Defaultlayout.scss';
import Header from './header/Header';
import Banner from './banner/Banner';
import Container from './container/Container';
import Footer from './footer/Footer';
function Defaultlayout() {
    return (
        <div className="wrapper">
            <Header />
            <Banner />
            <Container />
            <Footer />
        </div>
    );
}
export default Defaultlayout;
