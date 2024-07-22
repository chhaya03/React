import Item from "./Item";

const Fruititem = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fruitVal={item}></Item>
      ))}
    </ul>
  );
};

export default Fruititem;
