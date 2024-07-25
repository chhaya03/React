import css from "./ItemInput.module.css";

const ItemInput = ({ handleOnChange }) => {
  return (
    <input
      className={css.ItemInput}
      type="text"
      placeholder="Enter Item here"
      onChange={handleOnChange}
    />
  );
};

export default ItemInput;
