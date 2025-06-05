import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
  onAddItem,
  onRemoveAllItems,
  onResetItems,
  onMarkAllPacked,
  onMarkAllUnpacked,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={onAddItem} />
      <ButtonGroup
        onRemoveAllItems={onRemoveAllItems}
        onResetItems={onResetItems}
        onMarkAllPacked={onMarkAllPacked}
        onMarkAllUnpacked={onMarkAllUnpacked}
      />
    </div>
  );
}
