import Button from './Button';

export default function AddItemForm({ onAddItem, itemText = '', setItemText }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!setItemText || typeof setItemText !== 'function') {
      console.error('setItemText is not a function');
      return;
    }

    if (itemText && itemText.trim()) {
      onAddItem(itemText.trim());
      setItemText(''); // Clear the input after submission
    } else {
      console.error('Item name cannot be empty');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        placeholder="Item name"
        value={itemText || ''}
        onChange={(e) => {
          if (setItemText && typeof setItemText === 'function') {
            setItemText(e.target.value);
          } else {
            console.error('setItemText is not a function');
          }
        }}
      />
      <Button>Add item to list</Button>
    </form>
  );
}
