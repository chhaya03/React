import styles from "./Item.module.css";

const Item = ({ arrayItems }) => {
  const handlebyButton = (item) => {
    console.log(`${item} being bought`);
    alert(`${item} being bought ;) thanx for shopping!`);
  };

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
