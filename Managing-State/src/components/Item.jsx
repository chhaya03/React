import css from "./Item.module.css";

const Item = ({ Fruits }) => {
  const handleClickBuy = (items) => {
    console.log(`${items} being bought`);
  };

  return (
    <ul class="list-group">
      {Fruits.map((items) => (
        <li class="list-group-item" key={items}>
          {items}

          <button
            type="button"
            className={`${css.btn} btn btn-info`}
            onClick={() => handleClickBuy(items)}
          >
            Buy
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Item;
