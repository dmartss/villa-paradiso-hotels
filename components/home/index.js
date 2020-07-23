import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <img src="/room.jpg" />
      <div className={styles.content}>
        <h1 className="fw4">Villa Paradiso</h1>
        <h4 className="fw3">Apartment Hotel Miami</h4>
      </div>
    </div>
  )
}
