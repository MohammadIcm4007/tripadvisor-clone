import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.towers}>
          <div className={styles.tower}>
            <div className={styles.title}>درباره ی سایت</div>
            <Link className={styles.line}>درباره ی ما</Link>
            <Link className={styles.line}>پیشنهاد دادن</Link>
            <Link className={styles.line}>منابع و سیاست ها</Link>
            <Link className={styles.line}>مشاغل</Link>
            <Link className={styles.line}>سرمایه گذاری</Link>
            <Link className={styles.line}>گواهی های اعتماد و ایمنی</Link>
            <Link className={styles.line}>با ما تماس بگیرید</Link>
            <Link className={styles.line}>بیانیه دسترسی</Link>
          </div>
          <div className={styles.tower}>
            <div className={styles.title}>کاوش کردن</div>
            <Link className={styles.line}>یک نظر بنویسید</Link>
            <Link className={styles.line}>یک مکان اضافه کنید</Link>
            <Link className={styles.line}>ثبت نام کنید</Link>
            <Link className={styles.line}>مسافران برتر</Link>
            <Link className={styles.line}>رهبران سبز</Link>
            <Link className={styles.line}>وبلاگ ما</Link>
            <Link className={styles.line}>مرکز راهنمایی</Link>
            <Link className={styles.line}>مقالات سفر</Link>
          </div>
          <div className={styles.tower}>
            <div className={styles.title}>تجارت با ما</div>
            <Link className={styles.line}>صاحبان</Link>
            <Link className={styles.line}>مزایای تجارت با ما</Link>
            <Link className={styles.line}>مکان های حمایت شده</Link>
            <Link className={styles.line}>با تبلیغ کنید</Link>
            <Link className={styles.line}>محتوا API</Link>
            <Link className={styles.line}>با ما شریک شوید</Link>
          </div>
        </div>
        <div className={styles.iconline} >
          <img className={styles.icon} src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="icon" />
          <div className={styles.links} >
            <div className={styles.link} >شرایط استفاده</div>
            <div className={styles.link} >بیانیه حریم خصوصی</div>
            <div className={styles.link} >رضایت کوکی ها</div>
            <div className={styles.link} >نقشه ی سایت</div>
            <div className={styles.link} >نحوه ی کار سایت</div>
            <div className={styles.link} >با ما تماس بگیرید</div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>خدمات سایت</div>
        <Link className={styles.line}>بهترین رستوران ها را پیدا کنید</Link>
        <Link className={styles.line}>جستوجو توی کلی بلیط تور</Link>
        <Link className={styles.line}>خرید بلیط هواپیما</Link>
        <Link className={styles.line}>
          خانه های اجاره ای سراسر ایران رو پیدا کنید
        </Link>
        <div className={styles.icons}>
          <FaInstagram className={styles.icon} />
          <TbBrandYoutube className={styles.icon} />
          <FaTelegram className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
