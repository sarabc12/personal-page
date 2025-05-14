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
                <AboutMe />
                <Project />
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
