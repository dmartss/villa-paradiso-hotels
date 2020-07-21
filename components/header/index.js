import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Arrow, Logo } from '../icons'
import styles from './header.module.css'

const ActiveLink = ({ href, children }) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${
          pathname.split('/')[1] === href.split('/')[1] ? styles.active : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

export default () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)

  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo} aria-label="Villa Paradiso logo">
            <Logo />
          </a>
        </Link>

        <nav className={styles.desktopNav}>
          <ActiveLink href="/plugins">Plugins</ActiveLink>
          <ActiveLink href="/themes">Themes</ActiveLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zeit/hyper"
            className={styles.link}
          >
            GitHub
          </a>
          <ActiveLink href="/#installation">Download</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>

        <span className={styles.toggle} onClick={toggle}>
          <Arrow height={14} width={26} />
        </span>
      </header>

      <nav className={`${styles.mobileNav} ${mobileNavShown ? styles.active : ''}`}>
        <Link href="/plugins">
          <a>Plugins</a>
        </Link>
        <Link href="/themes">
          <a>Themes</a>
        </Link>
        <Link href="/store/submit">
          <a>Submit</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </>
  )
}
