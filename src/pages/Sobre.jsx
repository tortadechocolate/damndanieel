import styles from './Sobre.module.css'
import sobreGif from '../assets/valencina.gif'

function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <img src={sobreGif} alt="" className={styles.gif} />
    </div>
  )
}

export default Sobre
