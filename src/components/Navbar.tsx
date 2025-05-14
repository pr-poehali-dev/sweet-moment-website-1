
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./ui/icon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Меню", href: "/menu" },
    { name: "Галерея", href: "/gallery" },
    { name: "Контакты", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-coffee font-['Montserrat'] text-xl font-bold">Сладкий Момент</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-coffee"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium hover:text-coffee transition-colors ${
                  location.pathname === item.href 
                    ? "text-coffee border-b-2 border-coffee" 
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 py-1 rounded-md text-sm font-medium ${
                    location.pathname === item.href 
                      ? "bg-cream text-coffee" 
                      : "text-gray-600 hover:bg-cream/50 hover:text-coffee"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
