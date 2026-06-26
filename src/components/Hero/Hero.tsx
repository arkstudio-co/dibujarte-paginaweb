import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero-bg.svg"
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
          Donde cada trazo se convierte en una{" "}
          <span className={styles.titleAccent}>aventura</span>
        </h1>
        <p className={styles.subtitle}>
          Cuadernos diseñados para que los niños aprendan jugando, imaginando y
          descubriendo nuevas habilidades cada día.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.ctaPrimary}>
            Contáctanos
          </a>
          <a href="#products" className={styles.ctaSecondary}>
            Ver Catálogo
            <span className="material-symbols-outlined">arrow_forward</span>
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
