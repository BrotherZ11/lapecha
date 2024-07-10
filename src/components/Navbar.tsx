
import { FaUtensils, FaEnvelope, FaBook } from "react-icons/fa";
import '../styles/Navbar.css'; // Asegúrate de importar tu archivo CSS

function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <FaUtensils /> La Pechá
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                <FaBook /> Menú
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                <FaEnvelope /> Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
