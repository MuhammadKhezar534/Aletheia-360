import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LifeStories from "./pages/LifeStories";
import Navbar from "./components/Navbar";
import About from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life-stories" element={<LifeStories />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
