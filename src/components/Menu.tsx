// Menu.js
import {lazy, Suspense} from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Menu.css';

const MenuSection = lazy(() => import('./MenuSection'));

const menuData = [
  {
    title: 'Para Empezar',
    items: [
      { name: 'Ensaladilla Rusa', price: '2,20€ / 9,00€' },
      { name: 'Salpicón de Pulpo', price: '2,60€ / 10,00€' },
      { name: 'Mejillones al Vapor', price: '9,00€' },
      { name: 'Porra', price: '3,00€ / 8,50€' },
      { name: 'Tomate con Ventresca', price: '12,00€' },
      { name: 'Ensalada Mixta', price: '7,50€' },
      { name: 'Ensalada Cesar', price: '9,00€' },
      { name: 'Callos', price: '3,00€ / 8,00€' },
      { name: 'Migas Setenileñas', price: '9,00€' },
    ],
  },
  {
    title: 'Carnes',
    items: [
      { name: 'Presa con Jamón y Queso Payoyo', price: '17,95€' },
      { name: 'Solomillo de Cerdo Ibérico', price: '9,20€' },
      { name: 'Costillar a la Barbacoa', price: '16,95€' },
      { name: 'Codillo', price: '14,80€' },
      { name: 'Rabo de Toro', price: '17,90€' },
      { name: 'Entrecot de Ternera, 400gr', price: '23,50€' },
    ],
  },
  {
    title: 'Pescado',
    items: [
      { name: 'Calamares Fritos', price: '6,00€' },
      { name: 'Rosada a la Plancha', price: '8,00€' },
      { name: 'Fritura de Pescado', price: '9,50€' },
    ],
  },
  {
    title: 'Embutidos',
    items: [
      { name: 'Tabla Ibérica', price: '14,00€' },
      { name: 'Tabla de Quesos Variados', price: '9,00€' },
      { name: 'Tabla de Jamón', price: '14,00€' },
    ],
  },
  {
    title: "D' Gustar",
    items: [
      { name: 'Patatas Gratinadas', price: '8,00€' },
      { name: 'Patatas Kebab', price: '7,70€' },
      { name: 'Patatas Cheddar', price: '7,50€' },
      { name: 'Alitas de Pollo', price: '8,00€' },
      { name: 'Croquetas de Pollo (10u)', price: '8,00€' },
      { name: 'Lagrimitas de Pollo', price: '8,00€' },
      { name: 'Surtido de Croquetas (8u)', price: '9,00€' },
      { name: 'Lasaña', price: '6,50€' },
      { name: 'Kebab', price: '8,00€' },
      { name: 'Pincho de Gambas', price: '3,50€' },
      { name: 'Mini Hamburguesa de Buey', price: '4,00€' },
      { name: 'Flamenquín de Carrillada', price: '4,20€' },
    ],
  },
 
  {
    title: 'Montaditos',
    items: [
      { name: 'Chorizo', price: '2,60€' },
      { name: 'Salchichón', price: '2,60€' },
      { name: 'Carrillada con Queso de Cabra', price: '4,00€' },
      { name: 'Serranito', price: '3,20€' },
      { name: 'Salmón y Queso', price: '3,20€' },
      { name: 'Lomo y Tomate', price: '2,60€' },
      { name: 'Calamares', price: '2,60€' },
      { name: 'Lomo Adobado con Alioli', price: '2,60€' },
    ],
  },
  {
    title: 'Hamburguesas',
    items: [
      { name: 'Crujiente, Bacon, Queso, Tomate y Lechuga', price: '5,50€' },
      { name: 'Ternera, Bacon y Cheddar', price: '9,50€' },
      { name: 'Ternera, Rulo de Cabra y Cebolla Caramelizada', price: '12,00€' },
    ],
  },
  
  
  {
    title: 'Postres',
    items: [
      { name: 'Arroz con Leche', price: '4,00€' },
      { name: 'Flan de Chocolate con Almendras', price: '4,00€' },
      { name: 'Tiramisu', price: '5,50€' },
      { name: 'Tarta de Queso', price: '5,50€' },
    ],
  },
];

function Menu() {

  return (
    <motion.section
      id="menu"
      className="menu-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="menu-overlay">
        <Container>
          <div className="menu-content">
            <h2>Menú</h2>
            <Suspense fallback={<div>Loading...</div>}>
              {menuData.map((section, index) => (
                <MenuSection
                  key={index}
                  title={section.title}
                  items={section.items}
                />
              ))}
            </Suspense>
          </div>
        </Container>
        <hr className="divider" /> {/* Línea divisoria después de Menú */}
      </div>
      
    </motion.section>
    
  );
}

export default Menu;
