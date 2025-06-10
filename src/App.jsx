import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import DocsCards from "./components/DocsCards"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DrHipolito from "./components/DrHipolito"
import DrCortez from "./components/DrCortez"
import DrRaymundo from "./components/DrRaymundo"
import Tabs from "./components/Tabs"
import Hero from "./components/Hero"
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <DocsCards/>
      <About />
      <div className="container mx-auto px-8">
      {/* <Technologies />
      <Experience /> 
      <Projects />*/}
      </div>
      <Tabs />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen
                      bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

            {/*
              <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
              <div className="fixed top-0 -z-10 h-full w-full">
              <div className="absolute top-0 z-[-2] h-screen w-screen
                  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
              </div>
            */}
            
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dr-hipolito" element={<DrHipolito />} />
          <Route path="/dr-cortez" element={<DrCortez />} />
          <Route path="/dr-raymundo" element={<DrRaymundo />} />
        </Routes>
      </Router>
  
    </div>
  )
}

export default App
