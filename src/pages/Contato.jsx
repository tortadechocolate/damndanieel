import styles from './Contato.module.css'
import contGif from '../assets/rienshiomi.gif'

function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <img src={contGif} alt="" className={styles.gif} />
    </div>
  )
}

export default Contato
