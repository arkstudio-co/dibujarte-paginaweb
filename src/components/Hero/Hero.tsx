import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className={styles.bgImage}
          aria-hidden="true"
          priority
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Cada trazo es una aventura
        </h1>
        <p className={styles.subtitle}>
          Aprendamos jugando, imaginando y descubriendo nuestras habilidades
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.ctaPrimary}>
            Contáctanos
          </a>
        </div>
      </div>

      <div className={`${styles.deco} ${styles.decoLeft}`}>
        <span className="material-symbols-outlined">brush</span>
      </div>
      <div className={`${styles.deco} ${styles.decoRight}`}>
        <span className="material-symbols-outlined">auto_awesome</span>
      </div>
    </section>
  );
}
