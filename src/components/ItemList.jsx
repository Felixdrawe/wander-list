import EmptyView from './EmptyView';
import Item from './Item';
import Select from 'react-select';
import { useState, useMemo } from 'react';
import useItemsStore from '../stores/itemsStore';

const sortOptions = [
  { value: 'name', label: 'Sort by Name' },
  { value: 'packed', label: 'Sort by Packed Status' },
  { value: 'unpacked', label: 'Sort by Unpacked' },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const items = useItemsStore((state) => state.items);
  const toggleItemPacked = useItemsStore((state) => state.toggleItemPacked);
  const removeItem = useItemsStore((state) => state.removeItem);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      switch (sortBy.value) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'packed':
          return b.packed - a.packed; // Packed items first
        case 'unpacked':
          return a.packed - b.packed; // Unpacked items first
        default:
          return 0;
      }
    });
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortOptions}
            placeholder="Sort items..."
            value={sortBy}
            onChange={setSortBy}
            isClearable
          />
        </section>
      ) : null}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          packed={item.packed}
          onItemPacked={toggleItemPacked}
          onRemoveItem={removeItem}
        />
      ))}
    </ul>
  );
}
