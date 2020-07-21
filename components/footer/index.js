import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.root}>
      <nav className={styles.content}>
        <div className={styles.left}>
          <p>+1 (813) 575-4532</p>
          <a href={`mailto:villaparadiso@ariesliving.com`}>villaparadiso@ariesliving.com.com</a>
        </div>

        <p>
          Copyright © {`${new Date().getFullYear()}`} Aries Living YT LLC, Inc. All rights reserved.
        </p>

        <div className={styles.right}>
          <p>1415 Collins Ave</p>
          <p>Miami Beach, FL 33139</p>
        </div>
      </nav>
    </footer>
  )
}
