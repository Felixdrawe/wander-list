import { useState, useRef, useEffect } from 'react';
import Button from './Button';

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef(null);

  // Focus the input field when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemText) {
      onAddItem(itemText.trim());
      setItemText(''); // Clear the input after submission
      // Re-focus the input after submission
      inputRef.current.focus();
    } else {
      alert('Item name cannot be empty');
      inputRef.current.focus();
    }
  };

  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        placeholder="Item name"
        value={itemText}
        onChange={handleChange}
        ref={inputRef}
      />
      <Button>Add item to list</Button>
    </form>
  );
}
