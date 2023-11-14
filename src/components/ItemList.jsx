import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="card-container">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))};
    </div>
  );
};