import styles from "./baner.module.scss";

function Baner(props) {
  return (
    <div className={styles.component}>
      <div className={styles.title} >با خیال راحت از سفر لذت ببرید</div>
          <img src={props.src} alt="baner" className={styles.baner}/>
    </div>
  )
}

export default Baner