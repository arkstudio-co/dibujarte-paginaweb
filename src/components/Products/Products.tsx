import Image from "next/image";
import { products } from "@/data/products";
import styles from "./Products.module.css";

const borderColors: Record<string, string> = {
  "primary": "var(--primary)",
  "secondary": "var(--secondary)",
  "tertiary": "var(--tertiary)",
  "play-orange": "var(--play-orange)",
};

const iconColors: Record<string, string> = {
  "primary": "var(--primary)",
  "secondary": "var(--secondary)",
  "tertiary": "var(--tertiary)",
  "play-orange": "var(--play-orange)",
};

export default function Products() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.header}>
        <h2 className={styles.title}>Material Educativo</h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <article
            key={product.id}
            className={styles.card}
            style={{ borderBottomColor: borderColors[product.colorClass] }}
          >
            <div
              className={styles.imageWrapper}
              style={{ background: `color-mix(in srgb, ${borderColors[product.colorClass]} 20%, transparent)` }}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardDesc}>{product.description}</p>
            <div className={styles.cardIcon}>
              <span
                className="material-symbols-outlined"
                style={{ color: iconColors[product.colorClass] }}
              >
                {product.icon}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
