import BackgroundHeading from './components/BackgroundHeading';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialItems } from './lib/constants';

function App() {
  const [items, setItems] = useState(initialItems);

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

  return (
    <>
      {/* <BackgroundHeading /> */}
      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />
        <ItemList items={items} onItemPacked={handleItemPacked} onRemoveItem={handleItemRemove} />
        <Sidebar
          onAddItem={handleAddItem}
          onRemoveAllItems={handleRemoveAllItems}
          onResetItems={handleResetTtems}
          onMarkAllPacked={handleMarkAllPacked}
          onMarkAllUnpacked={handleMarkAllUnpacked}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
