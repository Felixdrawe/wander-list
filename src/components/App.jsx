import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialItems } from '../lib/constants';

function App() {
  const [items, setItems] = useState(initialItems);
  const [itemText, setItemText] = useState('');

  const handleAddItem = (text) => {
    const newItem = { id: uuidv4(), name: text, packed: false };
    setItems([...items, newItem]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList initialItems={items} />
        <Sidebar
          items={items}
          onAddItem={handleAddItem}
          itemText={itemText}
          setItemText={setItemText}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
