import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className="fw4">Villa Paradiso Apartment Hotel</h1>
      <h4 className="fw3">By Aries Living</h4>
      <div className={styles.content}></div>
    </div>
  )
}
