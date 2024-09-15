import styles from "./title.module.scss";

function Title(props) {
  return (
    <div className={styles.component} >
        <div className={styles.title} >{props.title}</div>
        <div className={styles.text} >{props.text}</div>
    </div>
  )
}

export default Title