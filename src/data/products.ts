import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "Escritura Inicial",
    description: "Trazos y escritura básica para los primeros pasos.",
    image: "/images/product-1.svg",
    colorClass: "primary",
    icon: "auto_fix_high",
  },
  {
    id: 2,
    title: "Lectoescritura",
    description: "Domina las letras y palabras de forma divertida.",
    image: "/images/product-2.svg",
    colorClass: "secondary",
    icon: "menu_book",
  },
  {
    id: 3,
    title: "Motricidad Fina",
    description: "Coordinación manual y destreza para manos pequeñas.",
    image: "/images/product-3.svg",
    colorClass: "tertiary",
    icon: "draw",
  },
  {
    id: 4,
    title: "Aprendizaje Integral",
    description: "Creatividad y pensamiento lógico en un solo lugar.",
    image: "/images/product-4.svg",
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
