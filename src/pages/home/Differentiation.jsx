import "../home/styles/Differentiation.scss";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import calidadIcon from "../../assets/images/calidad.webp";
import deliveryIcon from "../../assets/images/delivery.webp";
import personalizacionIcon from "../../assets/images/personalizacion.webp";
import asesoriaIcon from "../../assets/images/asesoria.webp";
import tiemposIcon from "../../assets/images/tiempos.webp";

const differentiationData = [
    { title: "Maxima Calidad", description: "Nuestros uniformes estan hechos con la mejor calidad, al mejor precio. Innovamos siempre nuestros procesos para garantizar la comodidad, durabilidad y resistencia de nuestros uniformes.", image: calidadIcon },
    { title: "On Site Delivery", description: "Entregamos directamente en el domicilio de tu empresa para mayor comodidad y eficiencia. Nuestro equipo de logistica se encarga de llevar tus uniformes a tiempo y en perfectas condiciones.", image: deliveryIcon },
    { title: "Personalizacion a Medida", description: "Sabemos que cada empresa es unica, por eso ofrecemos la posibilidad de personalizar tus uniformes con el logo, colores y detalles con diferentes técnicas, como: Bordado, Serigrafia, Sublimacion, Grabado laser, Impresión, y mucho mas.", image: personalizacionIcon },
    { title: "Asesoria Personalizada", description: "Nuestro equipo de asesores te ayudara a elegir los uniformes que mejor se adapten a las necesidades de tu empresa. Te brindamos la mejor asesoria en diseño, colores, telas, y mucho mas.", image: asesoriaIcon },
    { title: "Entregas a Tiempo", description: "Sabemos lo importante que es para tu empresa recibir tus uniformes a tiempo, por eso hemos desarrollado estrategias que van desde la producción hasta la logistica de la entrega para que esto sea posible.", image: tiemposIcon },
];

const Differentiation = () => {
    const [flipped, setFlipped] = useState(Array(differentiationData.length).fill(false));
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                if (top < window.innerHeight * 0.8) {
                    sectionRef.current.classList.add("visible");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Para activarlo si ya está en pantalla
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleFlip = (index) => {
        setFlipped((prev) => {
            const newFlipped = [...prev];
            newFlipped[index] = !newFlipped[index];
            return newFlipped;
        });
    };

    return (
        <div className="differentiation-section fade-in-section" ref={sectionRef}>
            <h2>¿Qué nos diferencia?</h2>
            <div className="differentiation-container">
                {differentiationData.map((item, index) => (
                    <div
                        className={`card-wrapper ${flipped[index] ? "flipped" : ""}`}
                        onClick={() => handleFlip(index)}
                        key={index}
                    >
                        <div className="card-inner"> {/* Contenedor para gestionar la animación de giro */}
                            <Card className="differentiation-card front">
                                <CardMedia component="img" height="220" image={item.image} alt={item.title} />
                                <CardContent>
                                    <Typography variant="h5">{item.title}</Typography>
                                </CardContent>
                            </Card>
                            <Card className="differentiation-card back">
                                <CardContent className="card-back">
                                    <Typography variant="h6">{item.description}</Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Differentiation;