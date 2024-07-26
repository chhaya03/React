import style from "./Container.module.css";

function Container({ children }) {
  return <div className={style.Container}>{children}</div>;
}

export default Container;
