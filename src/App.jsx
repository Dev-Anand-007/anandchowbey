import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/Homepage/About/About.jsx";
import { Stats } from './components/Homepage/Stats/Stats.jsx'
import { LogoSlider } from './components/Homepage/LogoSlider/LogoSlider.jsx'
import { Skills } from './components/Homepage/Skills/Skills'
import { Contact } from "./components/ContactPage/Contact";
import { Experience } from './components/Homepage/Experience/Experience.jsx'
import { Work } from './components/Homepage/Work/Work.jsx'
import DotGrid from "./elements/DotGrid.jsx";
import { Reviews } from "./components/Homepage/Reviews/Reviews.jsx";
import { Style } from "./components/Homepage/Style/Style";
import { Connect } from "./components/Homepage/Connect/Connect";
import { Footer } from "./components/Homepage/Footer/Footer";
import { Aboutme } from "./components/AboutPage/AboutMe/AboutMe";
import { Services } from "./components/ServicePage/Services/Services";
import { useEffect } from "react";
import { Works } from "./components/Works/Works";
import { Blogs } from "./components/BlogsPage/Blogs";
function ScrollToTop() {
  const { pathname } = useLocation();
  

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="relative bg-gradient-to-b from-blue-950 to-gray-900 min-h-screen overflow-hidden">


      {/* Main Content */}
      <div className="relative z-10">
        <Router>
           <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <About />
                  <Stats />
                  <LogoSlider />
                  <Skills />
                  <Experience />
                  <Reviews />
                  <Style />
                  <Connect />
                  <Footer />
                </>
              } />
            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <Aboutme />
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Navbar />
                  <Services/>
                  <Footer />
                </>
              }
            />
            <Route
              path="/blogs"
              element={
                <>
                  <Navbar />
                  <Blogs/>
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <Contact/>
                  <Footer />
                </>
              }
            />
             <Route
              path="/work"
              element={
                <>
                  <Navbar />
                  <Works/>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
