import Navbar from "../../components/navbar/navbar";
import Br from "../../components/br";
import styles from "./trips.module.scss";

function Trips() {
  return (
    <div className={styles.page}>
      <div className={styles.navbar} ><Navbar /></div>
      <Br />
    </div>
  )
}

export default Trips