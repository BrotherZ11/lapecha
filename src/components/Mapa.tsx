//Mapa.tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Mapa() {
    const mapStyles = {
        height: '400px',
        width: '100%'
      };
    
      const defaultCenter = {
        lat: 36.86369079188311,
        lng: -5.1811329000000015
      };
    
      return (
        <LoadScript googleMapsApiKey="AIzaSyA21mVdLXpB0vS8Sj2tyOdbqs-QQkkLXwc">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={14}
            center={defaultCenter}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
  )
}

export default Mapa