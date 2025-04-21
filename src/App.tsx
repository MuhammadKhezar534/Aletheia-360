import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LifeStories from "./pages/LifeStories";
import Navbar from "./components/Navbar";
import About from "./components/AboutUs";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

export interface ThemeContextType {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ThemeContextType | undefined>(
  undefined
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <Router>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/life-stories" element={<LifeStories />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </ModalContext.Provider>
  );
}

export default App;
