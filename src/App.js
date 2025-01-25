  import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import IARForm from "./components/IAR";
import VLSIPage from "./components/VLSI";
import ItCourseWarePage from "./components/ItCourseWare";
import NanoPage from "./components/Nano";
import Control from "./components/Control";
import WaterResource from "./components/WaterResource";
import Illumination from "./components/Illumination";
import Other from "./components/Other";
import EnviromentalSciences from "./components/EnviromentalSciences";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Jadavpur_University_Logo.svg/220px-Jadavpur_University_Logo.svg.png" 
            alt="JU Logo" 
            className="App-logo" 
          />
          <h1>Department Papers</h1>
          <nav>
            <button>
              <Link to="/iar-form">IAR</Link>
            </button>
            <button>
              <Link to="/vlsi-page">VLSI</Link>
            </button>
            <button>
              <Link to="/it-courseware">ItCourseWare</Link>
            </button>
            <button>
              <Link to="/nano-page">Nano</Link>
            </button>
            <button>
              <Link to="/illumination">Illumination</Link>
            </button>
            <button>
              <Link to="/water-resource">WaterResource</Link>
            </button>
            <button>
              <Link to="/enviromental-sceinces">EnviromentalSceinces</Link>
            </button>
            <button>
              <Link to="/control">Control</Link>
            </button>
            <button>
              <Link to="/other">Other</Link>
            </button>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/iar-form" element={<IARForm />} />
            <Route path="/vlsi-page" element={<VLSIPage />} />
            <Route path="/it-courseware" element={<ItCourseWarePage />} />
            <Route path="/nano-page" element={<NanoPage />} />
            <Route path="/control" element={<Control></Control>} />
            <Route path="/water-resource" element={<WaterResource />} />
            <Route path="/illumination" element={<Illumination />} />
            <Route path="/enviromental-sceinces" element={<EnviromentalSciences />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;


