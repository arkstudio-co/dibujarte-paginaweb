import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.card}>
        <div className={styles.deco}>
          <span className="material-symbols-outlined">send</span>
        </div>

        <div className={styles.infoColumn}>
          <h2 className={styles.title}>Cuéntanos sobre tu proyecto</h2>
          <p className={styles.desc}>
            Estamos ansiosos por escucharte y ayudarte a llevar educación
            creativa a más manos.
          </p>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <span className="material-symbols-outlined">mail</span>
              <span>hola@dibujarte.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className="material-symbols-outlined">call</span>
              <span>+54 11 1234-5678</span>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Nombre</label>
            <input
              className={styles.input}
              placeholder="Tu nombre"
              type="text"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              placeholder="correo@ejemplo.com"
              type="email"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Teléfono</label>
            <input className={styles.input} placeholder="+54..." type="tel" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Institución</label>
            <input
              className={styles.input}
              placeholder="Nombre del colegio"
              type="text"
            />
          </div>
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label className={styles.label}>Mensaje</label>
            <textarea
              className={styles.textarea}
              placeholder="¿Cómo podemos ayudarte?"
              rows={4}
            />
          </div>
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <button className={styles.submitBtn} type="submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
