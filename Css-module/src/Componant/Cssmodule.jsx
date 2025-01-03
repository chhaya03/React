import styles from "./item.module.css";

function Cssmodule() {
  return (
    <div>
      <p className={styles.heading}>In this page, we learn about Css module</p>

      <p className={styles.paragraph}>
        It is used for uniqueness , if same properies are defines in different
        file of react so during compilation for avoiding clashing between same
        properties, we can use css module
      </p>

      <p className={styles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
        temporibus?
      </p>
    </div>
  );
}

export default Cssmodule;
