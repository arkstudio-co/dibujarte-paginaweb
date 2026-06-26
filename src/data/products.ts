import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "Trazos y Líneas",
    description: "Fortalecemos nuestras habilidades de manera natural y fluida",
    image: "/images/material1.png",
    colorClass: "primary",
    icon: "auto_fix_high",
  },
  {
    id: 2,
    title: "Regletas A",
    description: "desarrollamos diferentes ejercicios motrices que varían de complejidad prograsivamente",
    image: "/images/material4.png",
    colorClass: "play-orange",
    icon: "lightbulb",
  },
  {
    id: 3,
    title: "Lecto-escritura",
    description: "Estimula el desarrollo de habilidades y competencia en lectura y escritura",
    image: "/images/material3.png",
    colorClass: "tertiary",
    icon: "draw",
  },
  {
    id: 4,
    title: "Pre-matemáticas",
    description: "Despiertemos la curiosidad y el amor por los números",
    image: "/images/material2.png",
    colorClass: "secondary",
    icon: "menu_book",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Material", href: "#products" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];
