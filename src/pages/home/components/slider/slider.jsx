import { useState } from "react";
import styles from "./slider.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Slider() {
  const [status, setstatus] = useState(1);
  function beforhandel() {
    setstatus(1);
  }
  function afterhandel() {
    setstatus(2);
  }
  const one = {
    gridColumn: "1/2",
  };
  const two = {
    gridColumn: "2/3",
  };
  const three = {
    gridColumn: "3/4",
  };
  const four = {
    gridColumn: "4/5",
  };
  return (
    <div className={styles.component}>
      {status == 2 && (
        <button onClick={beforhandel} className={styles.befor}>
          <FaArrowLeft />
        </button>
      )}
      {status == 1 && (
        <div className={styles.slider}>
          <div className={styles.item} style={one}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/79a11042be656a8674810d04.jpg"
              alt="تبریز"
            />
            <div className={styles.title}>تبریز</div>
          </div>
          <div className={styles.item} style={two}>
            <img
              className={styles.img}
              src="https://www.alibaba.ir/mag/wp-content/uploads/2021/07/01-4.jpg"
              alt="کرمانشاه"
            />
            <div className={styles.title}>کرمانشاه</div>
          </div>
          <div className={styles.item} style={three}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/3fb987be1fa2bcba7dd8bafe.jpg"
              alt="اردبیل"
            />
            <div className={styles.title}>اردبیل</div>
          </div>
          <div className={styles.item} style={four}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/511d8335fca502a604d01df1.jpg"
              alt="اصفهان"
            />
            <div className={styles.title}>اصفهان</div>
          </div>
        </div>
      )}
      {status == 2 && (
        <div className={styles.slider}>
          <div className={styles.item} style={one}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/59c29f1ec9df6c0432ff0b7f.jpg"
              alt="زنجان"
            />
            <div className={styles.title}>زنجان</div>
          </div>
          <div className={styles.item} style={two}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/12ece90e49b968548c670f58.jpg"
              alt="ایلام"
            />
            <div className={styles.title}>ایلام</div>
          </div>
          <div className={styles.item} style={three}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/1863e1dc48131abefbb415c3.jpg"
              alt="بوشهر"
            />
            <div className={styles.title}>بوشهر</div>
          </div>
          <div className={styles.item} style={four}>
            <img
              className={styles.img}
              src="https://safarmarket.com/blog/data/uploaded_files/923cb6922bd8bb0c1ba53cc2.jpg"
              alt="تهران" 
            />
            <div className={styles.title}>تهران</div>
          </div>
        </div>
      )}
      {status == 1 && (
        <button onClick={afterhandel} className={styles.after}>
          <FaArrowRight />
        </button>
      )}
    </div>
  );
}

export default Slider;
