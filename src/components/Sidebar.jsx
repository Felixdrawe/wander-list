import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({ items, onAddItem, itemText, setItemText }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={onAddItem} itemText={itemText} setItemText={setItemText} />
      <ButtonGroup />
    </div>
  );
}
