// App.js
import {Suspense, lazy}from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
const Contacto = lazy(() => import("./components/Contacto"));
const Menu = lazy(() => import("./components/Menu"));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <Menu />
      <Contacto />
      <Footer />
      </Suspense>
  );
}

export default App;
