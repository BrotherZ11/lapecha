import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/MenuSection.css'; // Asegúrate de importar tu archivo CSS

// Definición de la interfaz para cada ítem del menú
interface MenuItem {
  name: string;
  price: string;
}

// Definición de las props del componente MenuSection
interface MenuSectionProps {
  title: string;
  items: MenuItem[]; // items es un arreglo de objetos MenuItem
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar la visibilidad de la sección
  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.section className="menu-section">
      <button onClick={toggleSection} className={`section-button ${isOpen ? 'open' : ''}`}>
        <span className="button-text">{title}</span>
        {isOpen ? <FaChevronUp className="button-icon" /> : <FaChevronDown className="button-icon" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            className="section-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {items.map((item, index) => (
              <li key={index}>{item.name} - {item.price}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default MenuSection;