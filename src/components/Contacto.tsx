// Contacto.js
import { Container} from "react-bootstrap";

import { FaMapMarker, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import "../styles/Contacto.css"; 

function Contacto() {

  return (
    <div>
    <Container id="contacto">
  
          <div>
            <h2>Contacto</h2>
            <p>
                <FaMapMarker /> Dirección:{" "}
                <a
                  href="https://maps.app.goo.gl/hyRRn1eEeis1o8pCA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C. Constitucion, 5, 11692 Setenil de las Bodegas, Cádiz
                </a>
              </p>
            <hr /> {/* Línea divisoria */}
            <p>
              <FaPhoneAlt/> Teléfono: 654 95 81 74
            </p>
            <hr /> {/* Línea divisoria */}
            <p>
              <FaEnvelope/> Email: info@lapecha.es
            </p>
          </div>
    
    </Container>
    <hr className="divider" /> {/* Línea divisoria después de Menú */}
    </div>
    
  );
}

export default Contacto;
