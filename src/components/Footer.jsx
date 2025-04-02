import { Box, Container, Typography, Link, IconButton, Collapse, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import logo from "../assets/images/icon.png";

const Footer = () => {
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const isLargeScreen = useMediaQuery("(min-width:600px)");

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timeout);
    }, []);

    // Colapsar por defecto si es pantalla pequeña
    useEffect(() => {
        setExpanded(isLargeScreen);
    }, [isLargeScreen]);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Box
            component="footer"
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "primary.main",
                color: "white",
                zIndex: 1300,
                transition: "all 0.5s ease",
                transform: visible ? "translateY(0)" : "translateY(100%)",
                opacity: visible ? 1 : 0,
                fontFamily: "inherit",
                fontWeight: "bold"
            }}
        >
            {/* Botón para colapsar/expandir en mobile */}
            {!isLargeScreen && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 1,
                        cursor: "pointer"
                    }}
                    onClick={toggleExpand}
                >
                    {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>
            )}

            <Collapse in={expanded || isLargeScreen} timeout="auto">
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: { xs: "center", sm: "left" },
                        py: 2,
                        px: 4,
                        gap: 1,
                    }}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <img src={logo} alt="Logo Industrias Q" style={{ height: "40px" }} />
                        <Box>
                            <Typography variant="body2">Teléfono: 844-000-0000</Typography>
                            <Typography variant="body2">Email: contacto@industriasq.com</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Link
                            href="/catalogo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="inherit"
                        >
                            Descargar Catálogo
                        </Link>
                    </Box>

                    <Box textAlign="center">
                        <Typography variant="body2" sx={{ mb: 0.5 }}>Síguenos en nuestras redes</Typography>
                        <IconButton
                            component="a"
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: "white" }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener"
                            sx={{ color: "white" }}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Collapse>
        </Box>
    );
};


export default Footer;
