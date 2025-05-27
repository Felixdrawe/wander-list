import Item from './Item';

export default function ItemList({ initialItems, onItemPacked, onRemoveItem }) {
  return (
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
  );
}
