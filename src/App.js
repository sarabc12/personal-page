// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Orb from "./components/Orb";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import WebPages from "./components/WebPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Applications from "./components/Applications";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                  <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                  />
                  <Banner />
                </div>
                <section id="about">
                  <AboutMe />
                </section>
                <section id="project">
                  <Project />
                </section>
                <section id="contact">
                  <Contact></Contact>
                </section>
              </>
            }
          />
          <Route path="/webpages" element={<WebPages />} />
          <Route path="/application" element={<Applications />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
