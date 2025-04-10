// src/pages/contacto/Contacto.jsx

// Importación de componentes de MUI y dependencias necesarias
import { Box, Typography, TextField, Button } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Componente de formulario de contacto
const Contacto = () => {
  const form = useRef(); // Referencia al formulario para EmailJS
  const [submitted, setSubmitted] = useState(false); // Estado para mostrar mensaje de confirmación

  // Función que envía el formulario a través de EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b2ch31d', 'template_zvjqw0s', form.current, {
        publicKey: 'i1ojrbkvoWaPC8nNS',
      })
      
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 14 },
        px: 2,
        backgroundColor: "#2a2a2a",
        textAlign: "center",
      }}
    >
      {/* Encabezado y subtítulo */}
      <Typography variant="h3" sx={{
        color: "white",
        fontWeight: "bold",
        mb: 2,
        px: { xs: 2, md: 0 },
        fontSize: { xs: "2rem", md: "3rem" },
        wordWrap: "break-word"
      }}>
        Contáctanos
      </Typography>
      <Typography variant="body1" sx={{
        color: "#ccc",
        maxWidth: 700,
        mx: "auto",
        mb: 6,
        px: { xs: 2, md: 0 },
        fontSize: { xs: "1rem", md: "1.2rem" },
        lineHeight: 1.6
      }}>
        ¿Necesitas uniformes o promocionales duraderos, cómodos y confiables? Déjanos tus datos y con gusto te contactaremos para ofrecerte las mejores soluciones personalizadas.
      </Typography>

      {/* Mensaje de confirmación si el formulario fue enviado */}
      {submitted ? (
        <Typography sx={{
          color: "#90caf9", fontSize: "1.2rem",
          boxSizing: "border-box",
          overflowX: "hidden"
        }}>
          ¡Gracias! Tu mensaje ha sido enviado correctamente.
        </Typography>
      ) : (
        // Formulario de contacto con estilos responsivos y limpios
        <Box
          ref={form}
          component="form"
          onSubmit={sendEmail}
          sx={{

            display: "flex",
            flexDirection: "column",
            gap: 3,
            maxWidth: 500,
            width: "100%",
            mx: "auto",
            textAlign: "left",

            boxSizing: "border-box",
            overflowX: "hidden"
          }}
        >
          <TextField
            label="Nombre"
            name="user_name"
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          />
          <TextField
            label="Teléfono"
            name="user_phone"
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          />
          <TextField
            label="Correo electrónico"
            name="user_email"
            type="email"
            required
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          />
          <TextField
            label="Comentarios"
            name="message"
            required
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              paddingY: 1.5,
              fontWeight: "bold",
              letterSpacing: 1,
              textTransform: "uppercase",
              width: "100%",
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Enviar
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Contacto;
