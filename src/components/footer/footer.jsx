import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icon}>
        <img
          className={styles.img}
          src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
          alt="icon"
        />
      </div>
      <div className={styles.div}>
        <div className={styles.links}>
          <Link className={styles.link}> وبلاگ </Link>
          <Link className={styles.link}> ارتباط با ما </Link>
          <Link className={styles.link}> پشتیبانی </Link>
        </div>
        <div className={styles.text}>با کمک ما لحظات خوش سفر را برای برنامه ریزی  هدر ندهید</div>
      </div>
    </div>
  );
}

export default Footer;
