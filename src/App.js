// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Orb from "./components/Orb";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
        <Banner></Banner>
      </div>
      <AboutMe></AboutMe>
    </div>

  );
}

export default App;
