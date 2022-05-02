import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero';
import Usedby from './components/Usedby'
import Features from './components/Features'
import Love from './components/Love'
import Footer from './components/Footer'

function App() {
  return (
    <div className="space-y-32">
    <div>
      <Nav />
      <Hero />
    </div>
    <Usedby />
    <Features />
    <Love />
    <Footer />
    </div>
  );
}

export default App;
