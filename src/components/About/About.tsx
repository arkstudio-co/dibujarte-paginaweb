import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageGlow} />
          <Image
            src="/images/Nosotros.jpg"
            alt="Niño aprendiendo con Dibujarte"
            width={600}
            height={500}
            className={styles.image}
          />
          <div className={styles.iconBadge}>
            <span className="material-symbols-outlined">favorite</span>
          </div>
        </div>

        <div className={styles.textColumn}>
          <div className={styles.tag}>Sobre Dibujarte</div>
          <h2 className={styles.title}>
            Una experiencias de aprendizaje único
          </h2>
          <p className={styles.paragraph}>
            Acompañamos a los niños en sus primeros pasos por el mundo del conocimiento, creando puentes entre la imaginación y la realidad.
            Queremos transformar cada lección en un juego y cada trazo en un gran descubrimiento.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10k+</div>
              <div className={styles.statLabel}>Niños felices</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Escuelas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
