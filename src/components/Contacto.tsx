// Contacto.js
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaMapMarker, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import "../styles/Contacto.css"; 

function Contacto() {
    const mapStyles = {
        height: '400px',
        width: '100%'
      };
    
      const defaultCenter = {
        lat: 36.86369079188311,
        lng: -5.1811329000000015
      };

  return (
    <div>
    <Container id="contacto">
      <Row>
        <Col md={6}>
          <div>
            <h2>Contacto</h2>
            <p>
              <FaMapMarker/> Dirección:  C. Constitucion, 5, 11692 Setenil de las Bodegas, Cádiz
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
        </Col>
        <Col md={6}>
        <LoadScript googleMapsApiKey="AIzaSyA21mVdLXpB0vS8Sj2tyOdbqs-QQkkLXwc">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={14}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
        </Col>
      </Row>
    </Container>
    <hr className="divider" /> {/* Línea divisoria después de Menú */}
    </div>
    
  );
}

export default Contacto;
