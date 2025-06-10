import Button from './Button';
import { buttonGroup } from '../lib/constants';
import useItemsStore from '../stores/itemsStore';

export default function ButtonGroup() {
  const markAllPacked = useItemsStore((state) => state.markAllPacked);
  const markAllUnpacked = useItemsStore((state) => state.markAllUnpacked);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  const resetItems = useItemsStore((state) => state.resetItems);

  const handleOnClick = (text) => {
    switch (text) {
      case 'Remove all items':
        removeAllItems();
        break;
      case 'Reset to initial':
        resetItems();
        break;
      case 'Mark all as complete':
        markAllPacked();
        break;
      case 'Mark all as incomplete':
        markAllUnpacked();
        break;
      default:
        // Handle unexpected text
        console.warn(`No handler defined for button: ${text}`);
    }
  };

  return (
    <section className="button-group">
      {buttonGroup.map((text) => (
        <Button key={text} type="secondary" click={() => handleOnClick(text)}>
          {text}
        </Button>
      ))}
    </section>
  );
}
