import styles from "./item.module.css";

function Items({ stock }) {
  const handlebyButton = (item) => {
    console.log(`${item} being bought`);
    alert(`${item} being boughts`);
  };

  return (
    <ul class={`${styles.list} list-group`}>
      {stock.map((item) => (
        <li key={item} class="list-group-item">
          {item}
          <button
            type="button"
            class={`${styles.btn} btn btn-success`}
            onClick={() => handlebyButton(item)}
          >
            buy
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Items;
