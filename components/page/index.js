import Head from '../head'
import Nav from '../nav'
import Footer from '../footer'
import styles from './page.module.css'

export default function Page({ title, description, image, children }) {
  return (
    <div className={styles.wrapper}>
      <Head
        title={`${title && `${title} - `}Fresh Nest Organizing`}
        description={description}
        image={image}
      />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
