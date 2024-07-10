// App.js
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <NavBar />
    <Menu/>
    <Contacto />
    <Footer />
    </>
      
  );
}

export default App;
