import { IoMdHeartEmpty } from "react-icons/io";
import styles from "./box.module.scss";
import { IoMapOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";

function Boxs() {
  return (
    <div className={styles.boxs} >
    <div className={styles.box} > <IoMdHeartEmpty className={styles.icon} /> <div className={styles.text} >هتل ها رستوران ها و موارد دیگر را ذخیره کنید</div> </div>
    <div className={styles.box} > <IoMapOutline className={styles.icon} /> <div className={styles.text} >ذخیره های خود را در نقشه مخصوص با خودتان تماشا کنید</div></div>
    <div className={styles.box} > <MdPeopleOutline className={styles.icon} /> <div className={styles.text} >جزییات سفر خود را به اشتراک بگذارید</div> </div>
  </div>
  )
}

export default Boxs