import styles from "./Item.module.css";

const Item = ({ arrayItems, handlebyButton }) => {
  return (
    <ul className="list-group">
      {arrayItems.map((item) => (
        <li className="list-group-item">
          {item}
          <button
            className={`${styles.btn}  btn btn-info`}
            onClick={() => handlebyButton(item)}
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Item;
