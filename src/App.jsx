import './App.css';
import Header from './common/header';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Disclosure from './components/Disclosure';
import Home from './components/Home';
import OurServices from './components/OurServices';
import Process from './components/Process';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <main className="relative w-full">
        <div className='absolute top-0 left-0 w-full'><Header /></div>
        <Routes>
          <Route path="/" element={<> <Home />
            <OurServices />
            <AboutUs />
            <Process /><ContactUs /></>} />
           
          <Route path="/disclosure"
            element={<Disclosure />} />
            
        </Routes>
      </main>
    </Router>
  );
}

export default App;