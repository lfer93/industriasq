// src/pages/nosotros/UniformBenefits.jsx
import { Box, Typography } from "@mui/material";
import { Groups, Savings, Storefront } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import "./Nosotros.scss";

const UniformBenefits = () => {
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
        <Box
            ref={sectionRef}
            className={visible ? "fade-in" : "hidden"}
            sx={{
                width: "100%",
                px: 4,
                py: { xs: 10, md: 14 },
                backgroundColor: "#2a2a2a",
                textAlign: "center",
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 6 }}>
                ¿Por qué usar uniforme en tu empresa?
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    justifyContent: "center",
                    alignItems: "stretch",
                    flexWrap: "wrap",
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        minWidth: 280,
                        maxWidth: 400,
                        backgroundColor: "#3a3a3a",
                        borderRadius: 2,
                        p: 4,
                        boxShadow: 3,
                        textAlign: "left", color: "#eee",
                    }}
                >
                    <Groups sx={{ fontSize: 40, color: "#90caf9", mb: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Crea un sentido de pertenencia
                    </Typography>
                    <Typography>
                        Un uniforme fortalece la identidad del equipo, motivando a los empleados a sentirse parte fundamental de la empresa.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        minWidth: 280,
                        maxWidth: 400,
                        backgroundColor: "#3a3a3a",
                        borderRadius: 2,
                        p: 4,
                        boxShadow: 3,
                        textAlign: "left",
                    }}
                >
                    <Savings sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Practicidad y ahorro
                    </Typography>
                    <Typography>
                        Evita la preocupación por el vestuario diario y reduce los gastos personales de los colaboradores en ropa de trabajo.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        minWidth: 280,
                        maxWidth: 400,
                        backgroundColor: "#3a3a3a",
                        borderRadius: 2,
                        p: 4,
                        boxShadow: 3,
                        textAlign: "left",
                    }}
                >
                    <Storefront sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Identidad de marca
                    </Typography>
                    <Typography>
                        El uniforme es una herramienta visual poderosa que proyecta la imagen profesional de tu empresa hacia los clientes y el entorno.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default UniformBenefits;
