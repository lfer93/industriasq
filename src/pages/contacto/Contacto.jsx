import { Box, Typography, TextField, Button } from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../contacto/Contacto.scss"

const Contacto = () => {
  const form = useRef(); // Referencia al formulario para EmailJS
  const [submitted, setSubmitted] = useState(false); // Estado para mostrar mensaje de confirmacion

  // Función para enviar el formulario a traves de EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    emailjs
      .sendForm(
        "TU_SERVICE_ID",       // Reemplazar con tu Service ID de EmailJS
        "TU_TEMPLATE_ID",      // Reemplazar con tu Template ID de EmailJS
        form.current,
        "TU_PUBLIC_KEY"        // Reemplazar con tu Public Key de EmailJS
      )
      .then(
        (result) => {
          console.log(result.text); // Log de resultado exitoso
          setSubmitted(true); // Cambiar estado a enviado
        },
        (error) => {
          console.log(error.text); // Log de error
        }
      );
  }
  // Formulario de contacto
return (
  <Box
    sx={{
      width: "100%",
      py: { xs: 10, md: 14 },
      px: 4,
      backgroundColor: "#4a4a4a", // Fondo gris claro para mayor contraste,
      textAlign: "center",
    }}
  >
    {/* Encabezado y subtítulo */}
    <Typography variant="h3" sx={{ color: "white", fontWeight: "bold", mb: 2 }}>
      Contáctanos
    </Typography>
    <Typography variant="body1" sx={{ color: "#ccc", maxWidth: 700, mx: "auto", mb: 6 }}>
      ¿Necesitas uniformes o promocionales duraderos, cómodos y confiables? Déjanos tus datos y con gusto te contactaremos para ofrecerte las mejores soluciones personalizadas.
    </Typography>

    {/* Mensaje de confirmación si el formulario fue enviado */}
    {submitted ? (
      <Typography sx={{ color: "#90caf9", fontSize: "1.2rem" }}>
        ¡Gracias! Tu mensaje ha sido enviado correctamente.
      </Typography>
    ) : (
      // Formulario de contacto
      <Box
  ref={form}
  component="form"
  onSubmit={sendEmail}
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
    maxWidth: 500,
    mx: "auto",
    textAlign: "left",
  }}
>
  <TextField
    label="Nombre"
    name="user_name"
    required
    fullWidth
    variant="outlined"
    sx={{ backgroundColor: "#fff", borderRadius: 1 }}
  />
  <TextField
    label="Teléfono"
    name="user_phone"
    fullWidth
    variant="outlined"
    sx={{ backgroundColor: "#fff", borderRadius: 1 }}
  />
  <TextField
    label="Correo electrónico"
    name="user_email"
    type="email"
    required
    fullWidth
    variant="outlined"
    sx={{ backgroundColor: "#fff", borderRadius: 1 }}
  />
  <TextField
    label="Comentarios"
    name="message"
    required
    fullWidth
    multiline
    rows={4}
    variant="outlined"
    sx={{ backgroundColor: "#fff", borderRadius: 1 }}
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

