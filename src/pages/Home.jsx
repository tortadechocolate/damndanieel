import styles from './Home.module.css'
import homeGif from '../assets/matthias.gif'

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <img src={homeGif} alt="" className={styles.gif} />
    </div>
  )
}

export default Home
