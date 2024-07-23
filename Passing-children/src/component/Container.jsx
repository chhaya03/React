import styles from "./Container.module.css";

function Container(props) {
  return <div className={styles.ContainerCss}>{props.children}</div>;
}

export default Container;
