import styles from "./input.module.css";

function Input({ handledbyKeyDown }) {
  return (
    <>
      <input
        className={styles.input}
        placeholder="Enter fruits..."
        onKeyDown={handledbyKeyDown} // keydown events can be used to update the state of a component based on user input.
      />
    </>
  );
}

export default Input;
