import { Link } from "react-router-dom";
import styles from "./bigcard.module.scss";

function Bigcard(props) {
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        <img
          className={styles.img}
          src={props.src}
          alt="bigcard"
        />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.text}>
          {props.text}
        </div>
        <Link className={styles.btn}>{props.textbtn}</Link>
      </div>
    </div>
  );
}

export default Bigcard;
