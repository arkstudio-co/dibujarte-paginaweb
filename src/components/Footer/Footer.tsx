import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Image
          src="/images/logo.jpg"
          alt="Dibujarte"
          width={160}
          height={56}
          className={styles.brandImg}
        />
      </div>
      <p className={styles.tagline}>
        &ldquo;Aprender, imaginar y crecer juntos.&rdquo;
      </p>

      <div className={styles.social}>
        <a href="#" className={styles.socialIcon} aria-label="Website">
          <span className="material-symbols-outlined">language</span>
        </a>
        <a href="#" className={styles.socialIcon} aria-label="Facebook">
          <span className="material-symbols-outlined">thumb_up</span>
        </a>
        <a href="#" className={styles.socialIcon} aria-label="Chat">
          <span className="material-symbols-outlined">chat</span>
        </a>
      </div>

      <div className={styles.links}>
        <a href="#" className={styles.link}>
          Privacy Policy
        </a>
        <a href="#" className={styles.link}>
          Terms of Service
        </a>
        <a href="#" className={styles.link}>
          Support
        </a>
      </div>

      <div className={styles.divider} />

      <p className={styles.copyright}>
        &copy; 2024 Dibujarte. Hand-drawn with love for little dreamers.
      </p>
    </footer>
  );
}
