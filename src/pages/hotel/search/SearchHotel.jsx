import styles from "./SearchHotel.module.scss";

function SearchHotel() {
  return (
    <div className={styles.comopnent} >
        <div className={styles.search} >
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
        <img className={styles.img} src="https://hoteldel.com/wp-content/uploads/2021/01/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x900-1.jpg" />
    </div>
  )
}

export default SearchHotel