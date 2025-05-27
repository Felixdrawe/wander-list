import Item from './Item';
import './ItemList.css';

export default function ItemList({ initialItems, onItemPacked, onRemoveItem }) {
  return (
    <div className="item-list">
      <ul>
        {initialItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            packed={item.packed}
            onItemPacked={onItemPacked}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>
    </div>
  );
}
