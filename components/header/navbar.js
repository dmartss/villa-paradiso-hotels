import { memo } from 'react'
import Link from 'components/link'
import cn from 'classnames'
import { EMAIL, PHONE, NAME, REZTRIP_URL } from 'lib/constants'
import Logo from 'components/icons/logo'
import Container from 'components/container'
import Button from 'components/button'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <Container>
      <nav className={cn(styles.nav, 'f-reset')}>
        <div className={styles['mobile-top']}>
          <Link href="/" className={styles['mobile-logo']} title="Go to the homepage">
            <Logo />
          </Link>
          <div className={styles.hotel}>
            <Link href="/" className="fp">
              {NAME[0].toUpperCase()}
            </Link>
            <Link href="/" className="fs">
              {NAME[1].toLowerCase()}
            </Link>
          </div>

          <div className={styles.book}>
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.hotel}>
            <Link href="/" className="fp">
              {NAME[0].toUpperCase()}
            </Link>
            <Link href="/" className="fs">
              {NAME[1].toLowerCase()}
            </Link>
          </div>

          <Link href="/" className={styles.logo} title="Go to the homepage">
            <Logo />
          </Link>
          <Link href="/rooms" className="fp" title="Rooms">
            Rooms
          </Link>
          <Link href="/about" className="fp" title="About">
            About
          </Link>
          <Link href="/photos" className="fp" title="Photos">
            Photos
          </Link>
          <Link href="/specials" className="fp" title="Specials">
            Specials
          </Link>
          <Link
            external
            className="fp"
            href="https://ariesliving.com/terms-and-conditions/villa-paradiso"
            title="Terms"
          >
            Terms
          </Link>
          <div className={styles.book}>
            <Button href={REZTRIP_URL}>Book</Button>
          </div>
          <div className={styles['text-right']}>
            <p className="fp">{PHONE}</p>
            <Link className="fp" external href={`mailto:${EMAIL}?subject=Hello`}>
              {EMAIL}
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default memo(Navbar)
