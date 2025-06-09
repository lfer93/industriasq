import "../../../src/styles/Clients.scss";
import { useEffect } from "react";
import { Button } from "@mui/material";
import cliente1 from "../../assets/images/rhi-logo.webp"
import cliente2 from "../../assets/images/dmcontrol-logo.webp";
import cliente3 from "../../assets/images/lain-logo2.webp";
import cliente4 from "../../assets/images/pissa-logo.webp";
import cliente5 from "../../assets/images/ufi-logo.webp";
import cliente6 from "../../assets/images/atgroup-logo.webp";
import transicionImg from "../../assets/images/uniformes-transicion.webp";


const Clients = () => {
    useEffect(() => {
        const logos = document.querySelectorAll(".client-logo");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
            { threshold: 0.1 }
        );

        logos.forEach((logo) => observer.observe(logo));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="clients-section">
                <h1>Algunos de Nuestros Clientes</h1>
                <div className="clients-container">
                    {[cliente1, cliente2, cliente3, cliente4, cliente5, cliente6].map((client, index) => (
                        <div key={index} className="client-logo">
                            <img src={client} alt={`Cliente ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Barra de transicion con boton */}
            <div
                className="transition-bar"
                style={{
                    backgroundImage: `url(${transicionImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center 65%",
                }}
            >
                <div className="transition-content">
                    <Button
                        variant="contained"
                        color="primary"
                        href="../catalog/industriasqcatalogo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontWeight: "bold",
                            padding: "10px 24px",
                            borderRadius: "30px",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)"
                            }
                        }}
                    >
                        Descarga Nuestro Catálogo
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Clients;
