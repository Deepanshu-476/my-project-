import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Fixed header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content without extra black gaps */}
      <main className="pt-0 space-y-0">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer and back-to-top button */}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
