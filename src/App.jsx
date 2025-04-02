import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Clients from "./components/Clients";
import Customization from "./components/Customization";
import Differentiation from "./components/Differentiation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./styles/App.scss";

function App() {
  return (
    <div className="app-container">
    <Header />
    <Hero />
    <About />
    <Customization />
    <Differentiation />
    <Clients />
    <Footer />
  </div>
);
}

export default App
