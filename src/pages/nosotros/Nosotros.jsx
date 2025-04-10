// Importación de componentes de Material UI y hooks de React
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./Nosotros.scss";
import aboutBackground from "../../assets/images/about-background.png"; // Imagen de fondo
import UniformBenefits from "./UniformBenefits";

// Componente principal de la sección "¿Quiénes somos?" + Beneficios del uniforme
const Nosotros = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <>
            <Box
                ref={sectionRef}
                className={visible ? "fade-in" : "hidden"}
                sx={{
                    width: "100%",
                    py: { xs: 12, md: 20 },
                    px: 2,
                    textAlign: "center",
                    backgroundImage: `url(${aboutBackground})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#2a2a2a",
                    overflow: "hidden",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        mb: 4,
                        px: { xs: 2, md: 0 },
                        fontSize: { xs: "2rem", md: "3rem" },
                        wordWrap: "break-word"
                    }}
                >
                    ¿Quiénes somos?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#ccc",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        maxWidth: 800,
                        mx: "auto",
                        px: { xs: 2, md: 0 },
                        lineHeight: 1.6,
                        wordWrap: "break-word"
                    }}
                >
                    Somos una empresa 100% mexicana dedicada a ofrecer uniformes de la más alta calidad para sectores industriales,
                    corporativos y comerciales. Nuestro compromiso es vestir a tu equipo con excelencia, funcionalidad y estilo.
                </Typography>
            </Box>

            <UniformBenefits />
        </>
    );
};

export default Nosotros;
