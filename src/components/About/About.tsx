import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageGlow} />
          <Image
            src="/images/about-child.svg"
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
            Creando experiencias de aprendizaje único.
          </h2>
          <p className={styles.paragraph}>
            Dibujarte nace con el propósito de acompañar a los niños en sus
            primeros pasos por el mundo del saber. No solo hacemos cuadernos;
            creamos puentes entre la imaginación y la realidad.
          </p>
          <p className={styles.paragraph}>
            Nuestra misión es transformar cada lección en un juego, cada página
            en un descubrimiento y cada trazo en una pequeña gran victoria.
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
