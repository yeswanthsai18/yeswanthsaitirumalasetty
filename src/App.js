import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // Hide Navbar on Home Page

  console.log("Current Route:", location.pathname); // Debugging: See if Experience Page is loaded

  return (
    <div>
      
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </BrowserRouter>
  {showNavbar && <Navbar />}
    </div>
  );
}


export default App;
