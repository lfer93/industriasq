// src/pages/productos/CategoryGrid.jsx
import { Grid, Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import inviernoImg from "../../assets/images/invierno.jpg"
import ejecutivaImg from "../../assets/images/ejecutiva.jpg"
import industrialImg from "../../assets/images/industrial.jpg"
import promocionalesImg from "../../assets/images/promocionales.jpg"

const categories = [
    {
        name: "Línea Ejecutiva",
        image: ejecutivaImg,
        link: "https://drive.google.com/drive/folders/1577dIWyPxjuwRCdwLV5bKbO5jxzgltfj?usp=drive_link",
    },
    {
        name: "Línea Industrial",
        image: industrialImg,
        link: "https://www.industriasq.com",
    },
    {
        name: "Invierno",
        image: inviernoImg,
        link: "https://drive.google.com/drive/folders/1taydb3TFmlnLuCrjZI3iY8oU-z18oH3_?usp=drive_link",
    },
    {
        name: "Promocionales",
        image: promocionalesImg,
        link: "https://www.promocionalesenlinea.com/industriasqpromocionales",
    },
];

const CategoryGrid = () => {
    const [visibleItems, setVisibleItems] = useState(Array(categories.length).fill(false));
    const itemRefs = useRef([]);

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, categories.length);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            px={{ xs: 2, md: 4 }}
            py={{ xs: 4, md: 6 }}
            justifyContent="center"
            sx={{ mb: 12 }}
        >
            {categories.map((category, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-index={index}
                    className={visibleItems[index] ? "fade-in" : "hidden"}
                    style={{ transitionDelay: `${index * 200}ms` }}
                >
                    <Box
                        component="a"
                        href={category.link}
                        target="_blank"
                        sx={{
                            width: "100%",
                            aspectRatio: "4 / 3", // 🔧 Se añadió para forzar un cuadro perfecto
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: { xs: 180, sm: 200, md: 220 },
                            backgroundImage: `url(${category.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 2,
                            textDecoration: "none",
                            color: "white",
                            position: "relative",
                            overflow: "hidden",
                            transition: "transform 0.3s",
                            '&:hover': {
                                transform: "scale(1.03)",
                            },
                            '&::before': {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                            },
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                zIndex: 1,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            {category.name}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default CategoryGrid;
