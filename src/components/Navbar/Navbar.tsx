import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks } from "@/data/products";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <Image
            src="/images/logo.jpg"
            alt="Dibujarte"
            width={140}
            height={48}
            className={styles.logoImg}
          />
        </a>

        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className={styles.cta}>Get Started</a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
