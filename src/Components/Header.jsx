import React, { useState, useEffect } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "👤" },
    { id: "project", label: "Projects", icon: "🧩" },
    { id: "contact", label: "Contact", icon: "📖" },
  ];

  return (
    <nav
      className={`lg:fixed  top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 py-3 px-8 rounded-2xl shadow-2xl backdrop-blur-xl transition-all duration-500 ${
        darkMode
          ? "bg-gray-900/90 text-white border border-gray-700/50"
          : "bg-white/95 text-gray-800 border border-gray-200/50"
      } ${isScrolled ? "scale-105 shadow-xl" : "scale-100"}`}
      style={{
        width: "fit-content",
        background: darkMode
          ? "rgba(20,20,20,0.85)"
          : "rgba(255,255,255,0.9)",
      }}
    >
      {/* Navigation Items */}
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
            activeSection === item.id
              ? darkMode
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
              : darkMode
              ? "text-gray-300 hover:bg-gray-800 hover:text-white"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <span className="text-base">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}

      {/* Separator */}
      <div
        className={`h-6 w-px transition-all duration-300 ${
          darkMode ? "bg-gray-600" : "bg-gray-300"
        }`}
      ></div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`relative w-12 h-6 rounded-full p-1 transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-r from-blue-600 to-purple-600"
            : "bg-gradient-to-r from-blue-500 to-purple-500"
        } hover:scale-110 hover:shadow-lg`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-500 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center text-xs transition-opacity duration-300 ${
              darkMode ? "opacity-0" : "opacity-100"
            }`}
          >
            ☀️
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center text-xs transition-opacity duration-300 ${
              darkMode ? "opacity-100" : "opacity-0"
            }`}
          >
            🌙
          </div>
        </div>
      </button>
    </nav>
  );
};

export default Header;
