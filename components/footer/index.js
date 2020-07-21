import { Facebook, Instagram, Twitter } from '../icons'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.root}>
      <nav className={styles.content}>
        <div className={styles.left}>
          <p>+1 (813) 575-4532</p>
          <a href={`mailto:villaparadiso@ariesliving.com`}>villaparadiso@ariesliving.com.com</a>
        </div>

        <div className={styles.center}>
          <span className={styles.download}>
            <a href="/#installation" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="/#installation" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="/#installation" aria-label="Instagram">
              <Instagram />
            </a>
          </span>

          <p>
            Copyright © {`${new Date().getFullYear()}`} Aries Living YT LLC, Inc. All rights
            reserved.
          </p>
        </div>

        <div className={styles.right}>
          <p>1415 Collins Ave</p>
          <p>Miami Beach, FL 33139</p>
        </div>
      </nav>
    </footer>
  )
}
