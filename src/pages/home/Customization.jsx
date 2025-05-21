//importacion de estilos y hooks e imagenes

import "../home/styles/Customization.scss";
import { useEffect, useRef, useState } from "react";
import bordadoIcon from "../../assets/images/Bordado.webp"
import serigrafiaIcon from "../../assets/images/Serigrafia.webp";
import grabadoIcon from "../../assets/images/laser.webp";
import dtfIcon from "../../assets/images/dtf-print.webp";

const Customization = () => {
    const cardsRef = useRef([]);  //Referencias a cada tarjeta
    const [visibleCards, setVisibleCards] = useState([]); // Estado para marcar que tarjetas ya son visibles
    
    //Efecto para observar cuadno las tarjetas entran al viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => {
                            const updated = [...prev];
                            updated[entry.target.dataset.index] = true; // Marca la tarjeta como visible
                            return updated;
                        })
                    }
                });
            },
            {
                threshold: 0.1, // Cambia este valor para ajustar la sensibilidad
                rootMargin: "0px 0px -100px 0px" // Ajusta el margen para la activación
            }
        );
        // Observar cada tarjeta
        cardsRef.current.forEach((el) => el && observer.observe(el));

        // Limpiar observadores al desmontar
        return () => {
            cardsRef.current.forEach((el) => el && observer.unobserve(el));
    };
    }, []);

    //Opciones de personalizacion con imagen y etiqueta 
    const options = [
        { image: bordadoIcon, label: "Bordado" },
        { image: serigrafiaIcon, label: "Serigrafía" },
        { image: grabadoIcon, label: "Grabado Láser" },
        { image: dtfIcon, label: "Impresión DTF + DTF UV" },
    ];
    // Seccion principal
    return (
        <section className="customization-section">
            <h2>Personalización</h2>
            <div className="customization-options">
                {options.map((opt, index) => (
                    // Tarjeta individual
                    <div
                        key={index}
                        className={`customization-card ${visibleCards[index] ? "fade-in" : ""}`}
                        key-index={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        data-index={index}
                    >
                        <img src={opt.image} alt={opt.label} />
                        <p>{opt.label}</p>
                    </div>
                ))}
            </div>

        </section>
        );
};
/* const Customization = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                if (top < window.innerHeight * 0.8) {
                    sectionRef.current.querySelector(".customization-options").classList.add("visible");
                }
            }
        };


        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Para activarlo si ya está en pantalla
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); */
/* const Customization = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin: "0px 0px -100px 0px"}
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const options = [
        { image: bordadoIcon, label: "Bordado" },
        { image: serigrafiaIcon, label: "Serigrafía" },
        { image: grabadoIcon, label: "Grabado Láser" },
        { image: dtfIcon, label: "Impresión DTF + DTF UV" },
    ];

    return (
        <section className="customization-section" ref={sectionRef}>
            <h2>Personalización</h2>
           
            <div className={`customization-options ${visible ? "fade-in" : ""}`}> 
                {options.map((opt, index) => (
                    <div key={index} className="customization-card"> 
                        <img src={opt.image} alt={opt.label} />
                        <p>{opt.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}; */

/* 
const Customization = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                if (top < window.innerHeight * 0.8) {
                    sectionRef.current.querySelector(".customization-options").classList.add("visible");
                }
            }
        };


        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Para activarlo si ya está en pantalla
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="customization-section" ref={sectionRef}>
            <div className="customization-options" ref={sectionRef}>
                <div className="option">
                    <img src={bordadoIcon} alt="Bordado" className="custom-icon" />
                    <p>Bordado</p>
                </div>
                <div className="option">
                    <img src={serigrafiaIcon} alt="Serigrafía" className="custom-icon" />
                    <p>Serigrafía</p>
                </div>
                <div className="option">
                    <img src={grabadoIcon} alt="Grabado-laser" className="custom-icon" />
                    <p>Grabado Láser</p>
                </div>
                <div className="option">
                    <img src={dtfIcon} alt="Bordado" className="custom-icon" />
                    <p>Impresión DTF + DTF UV</p>
                </div>
            </div>
        </div>
    )
} */

export default Customization;