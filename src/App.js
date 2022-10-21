import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen w-screen">
        <Navbar />
        {/* mx-auto px-3 pt-20 */}
      <main className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/About' element={<About />}/>
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
