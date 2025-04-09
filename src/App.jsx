import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Productos from "./pages/productos/Productos";
import Nosotros from "./pages/nosotros/Nosotros";
import Contacto from "./pages/contacto/Contacto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
