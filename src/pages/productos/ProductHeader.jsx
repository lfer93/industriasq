// src/pages/productos/ProductHeader.jsx

import { Box, Typography, Button } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import backgroundImage from "../../assets/images/background-productheader.png";
import "../../pages/productos/Productos.scss";

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
          overflow: "hidden",
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
        <Box sx={{ px: { xs: 2, md: 0 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "4rem" },
              wordWrap: "break-word",
            }}
          >
            Productos
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ddd",
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 3,
              px: { xs: 2, md: 0 },
              lineHeight: 1.6,
              wordWrap: "break-word",
            }}
          >
            Tenemos los mejores productos para cumplir con las necesidades de nuestros clientes.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="../catalog/catindustriasq.pdf"
            target="_blank"
          >
            Descargar catálogo completo
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductHeader;
