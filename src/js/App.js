import logo from '../logo.svg';
import '../css/App.css';
import Navbar from '../component/navbar';
import HeroSection from '../component/herosection';
import About from '../component/about';
import Sertifkat from '../component/Sertifikat';
import Portfolio from '../component/portfolio';
import Footerapp from '../component/footer';

function App() {
  return (
    <div>
      <Navbar/>
     <HeroSection />
     <About />
     <Sertifkat />
     <Portfolio />
     <Footerapp/>
    </div>
  );
}

export default App;
