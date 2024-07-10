// Footer.js
import { FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  const handleInstagramClick = () => {
    // Reemplaza 'tu_perfil_de_instagram' con tu nombre de perfil de Instagram
    window.open("https://www.instagram.com/_la_pecha/", "_blank");
  };

  return (
    <footer className="footer">
      <div className="text-center">
        <FaInstagram
          size={30}
          className="instagram-icon"
          onClick={handleInstagramClick}
        />
        <p>&copy; 2024 Bar La Pechá</p>
      </div>
    </footer>
  );
}

export default Footer;
