import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialItems } from '../lib/constants';

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || initialItems;
  });

  const handleAddItem = (text) => {
    const newItem = { id: uuidv4(), name: text, packed: false };
    setItems([...items, newItem]);
  };

  const handleRemoveAllItems = () => {
    if (window.confirm('Are you sure you want to remove all items?')) {
      setItems([]);
    }
  };

  const handleResetTtems = () => {
    if (window.confirm('Are you sure you want to reset to initial items?')) {
      setItems(initialItems);
    }
  };

  const handleMarkAllPacked = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, packed: true })));
  };
  const handleMarkAllUnpacked = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, packed: false })));
  };

  const handleItemPacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  const handleItemRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Load items from localStorage on initial mount
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetTtems,
        handleMarkAllPacked,
        handleMarkAllUnpacked,
        handleItemPacked,
        handleItemRemove,
      }}>
      {children}
    </ItemsContext.Provider>
  );
}
