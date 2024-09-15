import { Link } from "react-router-dom";
import styles from "./error.module.scss";

function Error() {
  return (
    <div className={styles.page} >
      <div className={styles.continer} >
      <div className={styles.title} >Error 404</div>
      <div className={styles.text} >صفحه ی مورد نظر یافت نشد</div>
      <Link to="/" className={styles.btn}>رفتن به صفحه ی اصلی</Link>
      </div>
    </div>
  )
}

export default Error