import Navbar from "../../components/navbar/navbar";
import styles from "./trips.module.scss";

function Trips() {
  return (
    <div className={styles.page}>
      <div className={styles.navbar} ><Navbar /></div>
    </div>
  )
}

export default Trips