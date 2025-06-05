import Button from './Button';
import { buttonGroup } from '../lib/constants';
import { useItemsContext } from '../lib/hooks';

export default function ButtonGroup() {
  const { handleRemoveAllItems, handleResetTtems, handleMarkAllPacked, handleMarkAllUnpacked } =
    useItemsContext();

  const handleOnClick = (text) => {
    switch (text) {
      case 'Remove all items':
        handleRemoveAllItems();
        break;
      case 'Reset to initial':
        handleResetTtems();
        break;
      case 'Mark all as complete':
        handleMarkAllPacked();
        break;
      case 'Mark all as incomplete':
        handleMarkAllUnpacked();
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
