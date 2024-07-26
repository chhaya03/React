import styles from "./Input.module.css";

const Input = ({ handleonkeydown }) => {
  return (
    <input
      onKeyDown={handleonkeydown}
      type="text"
      placeholder="Enter Item.."
      className={styles.Input}
    ></input>
  );
};

export default Input;
