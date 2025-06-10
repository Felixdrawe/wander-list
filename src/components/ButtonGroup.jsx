import Button from './Button';
import { buttonGroup } from '../lib/constants';
import useItemsStore from '../stores/itemsStore';

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const clearItems = useItemsStore((state) => state.clearItems);
  const resetItems = useItemsStore((state) => state.resetItems);

  const handleOnClick = (text) => {
    switch (text) {
      case 'Remove all items':
        clearItems();
        break;
      case 'Reset to initial':
        resetItems();
        break;
      case 'Mark all as complete':
        markAllAsComplete();
        break;
      case 'Mark all as incomplete':
        markAllAsIncomplete();
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
