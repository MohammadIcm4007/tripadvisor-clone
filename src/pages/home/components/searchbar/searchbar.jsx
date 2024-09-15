import { useState } from "react";
import styles from "./searchbar.module.scss";
import { MdOutlineCelebration, MdOutlineHotel } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { IoFastFoodOutline, IoAirplaneOutline } from "react-icons/io5";
import { TbHomeDollar } from "react-icons/tb";
import Inputflight from "../input-flight/input-flight";
import { Datepicker } from "@ijavad805/react-datepicker";

function Searchbar() {
  const [type, settype] = useState("all");
  function allhandel() {
    settype("all");
  }
  function hotelhandel() {
    settype("hotel");
  }
  function funhandel() {
    settype("fun");
  }
  function reshandel() {
    settype("res");
  }
  function flighthandel() {
    settype("flight");
  }
  function homehandel() {
    settype("home");
  }
  return (
    <div className={styles.searchbar}>
      <div className={styles.title}>
        {type == "all"
          ? "کجا میروید؟"
          : type == "hotel"
          ? "بهترین هتل ها را با قیمت مناسب پیدا کنید"
          : type == "fun"
          ? "با حال ترین کار ها تو سفر"
          : type == "res"
          ? "از بزرگترین رستوران ها تا کوچکترین غذا خوری"
          : type == "flight"
          ? "بهترین زمان و قیمت رو برای پروازتون پیدا کنید"
          : type == "home" && "جایی برای ماندن کرایه کنید"}
      </div>
      <div className={styles.types}>
        <button
          onClick={allhandel}
          className={type == "all" ? styles.ontype : styles.type}
        >
          <RiHomeLine className={styles.icon} />
          جستوجوی همه
        </button>
        <button
          onClick={hotelhandel}
          className={type == "hotel" ? styles.ontype : styles.type}
        >
          <MdOutlineHotel className={styles.icon} />
          هتل
        </button>
        <button
          onClick={funhandel}
          className={type == "fun" ? styles.ontype : styles.type}
        >
          <MdOutlineCelebration className={styles.icon} />
          کارها
        </button>
        <button
          onClick={reshandel}
          className={type == "res" ? styles.ontype : styles.type}
        >
          <IoFastFoodOutline className={styles.icon} />
          رستوران
        </button>
        <button
          onClick={flighthandel}
          className={type == "flight" ? styles.ontype : styles.type}
        >
          <IoAirplaneOutline className={styles.icon} />
          پرواز
        </button>
        <button
          onClick={homehandel}
          className={type == "home" ? styles.ontype : styles.type}
        >
          <TbHomeDollar className={styles.icon} />
          خانه ی اجاره ای
        </button>
      </div>
      {type != "flight" ? (
        <div className={styles.search}>
          <input
            className={styles.text}
            type="text"
            placeholder={
              type == "all"
                ? "رستوران ها , جاذبه های توریستی , پروازها یا مقصد"
                : type == "hotel"
                ? "نام هتل یا مقصد"
                : type == "fun"
                ? "تفریح , جاذبه ی گردشگری یا مقصد"
                : type == "res"
                ? "نام رستوران یا مقصد"
                : type == "home" && "مقصد"
            }
          />
          <button className={styles.searchbtn}>جستوجو</button>
        </div>
      ) : (
        <div className={styles.flight}>
          <Inputflight title="مبدا" />
          <Inputflight title="مقصد" />
          <Datepicker
            theme="green"
            input={
              <input className={styles.datepicker} placeholder="تاریخ رفت" />
            }
          />
          <Datepicker
            theme="green"
            input={
              <input className={styles.datepicker} placeholder="تاریخ برگشت" />
            }
          />
        </div>
      )}
    </div>
  );
}

export default Searchbar;
