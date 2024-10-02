import Boxs from "../boxs/boxs";
import styles from "./no-trips.module.scss";

function Notrips() {
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        برنامه ریزی سفر خود را با سفرها شخصی سازی کنید
      </div>
      <div className={styles.text}>
        اکنون دو راه برای برنامه ریزی سفر وجود دارد: از هوش مصنوعی استفاده کنید
        یا خودتان جستجو کنید. در هر صورت، شما بیش از 8 میلیون نقطه برای کشف
        دارید، با بیش از یک میلیارد مرور و نظر مسافر که شما را راهنمایی می کند.
      </div>
      <Boxs />
    </div>
  );
}

export default Notrips;
