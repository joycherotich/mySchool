import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Educator from './components/Educator';
import Portfolio from './components/Portfolio';
import Student from './components/Student';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import School from './components/School';
import './App.css'
import VideoConference from './components/VideoConference';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/educator' element={<Educator />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/landing' element={<LandingPage />} />
          <Route exact path='/student' element={<Student />} />
          <Route path='/school' element={<School />} />
          <Route exact path='/videoconference' element={<VideoConference />} />
          <Route exact path='/sidebar' element={<Sidebar />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
