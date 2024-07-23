import css from "./Container.module.css";

function Container(props) {
  return <div className={css.container}>{props.children}</div>;
}
export default Container;
