import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/header/Navbar'
import Name from './Components/header/Name';
import Profile from './Components/body/Profile';
import Content from './Components/body/Content';
import Links from './Components/body/Links';
import About from './pages/About';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Contact from './pages/Contacts';

function App() {
  return (
    <Router>
      <div className='w-screen min-h-screen bg-black rounded-lg'>
        <Name />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Content />
              <Links />
              <Profile />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ✅ Redirect all unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
