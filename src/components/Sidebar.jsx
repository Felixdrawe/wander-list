import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({ onAddItem, onRemoveAllItems }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={onAddItem} />
      <ButtonGroup onRemoveAllItems={onRemoveAllItems} />
    </div>
  );
}
