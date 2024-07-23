import css from "./ItemInput.module.css";

function ItemInput() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className={css.ItemInput}
      type="text"
      placeholder="Enter Item here"
      onChange={handleOnChange}
    />
  );
}

export default ItemInput;
