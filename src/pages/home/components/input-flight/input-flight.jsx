import { MdFlightTakeoff } from "react-icons/md";
import styles from "./input-flight.module.scss";

function Inputflight(props) {
  return (
    <div className={styles.component}>
      <MdFlightTakeoff className={styles.icon} />{" "}
      <input className={styles.input} type="text" placeholder={props.title} />
    </div>
  );
}

export default Inputflight;
