import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className="fw4">Fresh Nest Organizing</h1>
      <h4 className="fw3">Your Professional Organizer</h4>
      <div className={styles.content}>
        <h2 className="fw5">Behind the Business</h2>
      </div>
    </div>
  )
}
