import { Link } from "react-router-dom";
import styles from "./card.module.scss";

function Card(props) {
  return (
    <div className={styles.card} >
        <img className={styles.img} src={props.src} alt={props.name} />
        <div className={styles.text} >
            <div className={styles.title} >{props.title}</div>
            <div className={styles.subtext} >{props.text}</div>
        </div>
        <Link to="/" className={styles.btn}><div className={styles.textbtn} >{props.textbtn}</div></Link>
    </div>
  )
}

export default Card