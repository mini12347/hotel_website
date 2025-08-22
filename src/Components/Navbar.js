import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour gérer le défilement fluide vers les sections
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Fermer le menu mobile après le clic
    setMenuOpen(false);
  };

  // Fonction pour gérer la navigation vers d'autres pages
  const handleNavigation = (path) => {
    window.location.href = path;
    setMenuOpen(false);
  };

  // Configuration des liens avec leurs IDs correspondants ou chemins
  const navItems = [
    { label: "À propos", id: "apropos", type: "scroll" },
    { label: "Chambres", path: "/chambres", type: "navigate" },
    { label: "Services", id: "services", type: "scroll" },
    { label: "Activités", id: "activites", type: "scroll" },
    { label: "Contact", id: "contact", type: "scroll" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="text-[#B8742D] font-extrabold text-2xl tracking-widest cursor-pointer select-none">
          Velyssa
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-10 font-medium text-[#5C2E00]">
          {navItems.map((item) => (
            <li key={item.id || item.path} className="relative group cursor-pointer">
              <button
                onClick={() => {
                  if (item.type === "navigate") {
                    handleNavigation(item.path);
                  } else {
                    handleScrollToSection(item.id);
                  }
                }}
                className="hover:text-[#E1AD2D] transition-colors duration-300"
              >
                {item.label}
              </button>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#E1AD2D] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Burger menu mobile */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#EFE6D9] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-[#5C2E00]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-white bg-opacity-95 shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-6 font-medium text-[#5C2E00]">
            {navItems.map((item) => (
              <li key={item.id || item.path}>
                <button
                  onClick={() => {
                    if (item.type === "navigate") {
                      handleNavigation(item.path);
                    } else {
                      handleScrollToSection(item.id);
                    }
                  }}
                  className="block w-full text-left hover:text-[#E1AD2D] transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleScrollToSection('reservation')}
                className="block w-full bg-[#E1AD2D] text-white text-center py-2 rounded-full font-semibold shadow-md hover:bg-[#B8742D] transition-colors duration-300 select-none"
              >
                Réserver
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;