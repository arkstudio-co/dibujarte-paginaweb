import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "Escritura Inicial",
    description: "Trazos y escritura básica para los primeros pasos.",
    image: "/images/material1.png",
    colorClass: "primary",
    icon: "auto_fix_high",
  },
  {
    id: 2,
    title: "Lectoescritura",
    description: "Domina las letras y palabras de forma divertida.",
    image: "/images/material2.png",
    colorClass: "secondary",
    icon: "menu_book",
  },
  {
    id: 3,
    title: "Motricidad Fina",
    description: "Coordinación manual y destreza para manos pequeñas.",
    image: "/images/material3.png",
    colorClass: "tertiary",
    icon: "draw",
  },
  {
    id: 4,
    title: "Aprendizaje Integral",
    description: "Creatividad y pensamiento lógico en un solo lugar.",
    image: "/images/material4.png",
    colorClass: "play-orange",
    icon: "lightbulb",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Material", href: "#products" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];
