import { Box, Typography, Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import backgroundImage from "../../assets/images/background-productheader.png";
import "../../pages/productos/Productos.scss";
import UniformBenefits from "../nosotros/UniformBenefits";

const ProductHeader = () => {
  const headerRef = useRef(null);
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

    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <>
      <Box
        ref={headerRef}
        className={visible ? "fade-in" : "hidden"}
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ color: "white", fontWeight: "bold", mb: 2 }}>
            Productos
          </Typography>
          <Typography variant="body1" sx={{ color: "#ddd", fontSize: "1.2rem", mb: 3 }}>
            Tenemos los mejores productos para cumplir con las necesidades de nuestros clientes.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="https://drive.google.com/your-catalogo-link"
            target="_blank"
          >
            Descargar catálogo completo
          </Button>
        </Box>
      </Box>
      <UniformBenefits />
    </>
  );
};

export default ProductHeader;
