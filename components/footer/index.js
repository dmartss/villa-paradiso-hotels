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
          <span className={styles.social}>
            <a
              href="https://www.facebook.com/Aries-Living-112940767034421"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a href="https://twitter.com/aries_living" target="_blank" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://instagram.com/ariesliving" target="_blank" aria-label="Instagram">
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
