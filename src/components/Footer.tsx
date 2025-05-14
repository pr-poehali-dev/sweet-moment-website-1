
import { Link } from "react-router-dom";
import Icon from "./ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream-dark py-8 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-coffee text-lg font-semibold mb-3">Сладкий Момент</h3>
            <p className="text-coffee-dark text-sm">
              Свежая выпечка и ароматный кофе каждый день
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" className="text-coffee hover:text-coffee-dark transition-colors" aria-label="Instagram">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://facebook.com" className="text-coffee hover:text-coffee-dark transition-colors" aria-label="Facebook">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="https://vk.com" className="text-coffee hover:text-coffee-dark transition-colors" aria-label="VK">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-coffee text-lg font-semibold mb-3">Режим работы</h3>
            <p className="text-coffee-dark text-sm mb-1">
              Ежедневно с 8:00 до 21:00
            </p>
            <p className="text-coffee-dark text-sm">
              Без выходных
            </p>
          </div>
          
          <div>
            <h3 className="text-coffee text-lg font-semibold mb-3">Контакты</h3>
            <p className="text-coffee-dark text-sm flex items-center mb-2">
              <Icon name="MapPin" size={16} className="mr-2" />
              ул. Центральная, 15
            </p>
            <p className="text-coffee-dark text-sm flex items-center mb-2">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 123-45-67
            </p>
            <p className="text-coffee-dark text-sm flex items-center">
              <Icon name="Mail" size={16} className="mr-2" />
              sweetmoment@mail.ru
            </p>
          </div>
        </div>
        
        <div className="border-t border-coffee/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-dark text-xs">
            © {currentYear} Сладкий Момент. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4 text-xs">
              <Link to="/" className="text-coffee-dark hover:text-coffee transition-colors">
                Главная
              </Link>
              <Link to="/about" className="text-coffee-dark hover:text-coffee transition-colors">
                О нас
              </Link>
              <Link to="/menu" className="text-coffee-dark hover:text-coffee transition-colors">
                Меню
              </Link>
              <Link to="/contact" className="text-coffee-dark hover:text-coffee transition-colors">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
