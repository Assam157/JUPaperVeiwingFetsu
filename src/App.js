import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import IARForm from "./components/IAR";
import VLSIPage from "./components/VLSI";
import ItCourseWarePage from "./components/ItCourseWare";
import NanoPage from "./components/Nano";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
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
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/iar-form" element={<IARForm />} />
            <Route path="/vlsi-page" element={<VLSIPage />} />
            <Route path="/it-courseware" element={<ItCourseWarePage />} />
            <Route path="/nano-page" element={<NanoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
