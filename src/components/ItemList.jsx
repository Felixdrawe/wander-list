import EmptyView from './EmptyView';
import Item from './Item';

export default function ItemList({ items, onItemPacked, onRemoveItem }) {
  return (
    <div className="item-list">
      {items.length === 0 && <EmptyView />}
      <ul>
        {items.map((item) => (
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
