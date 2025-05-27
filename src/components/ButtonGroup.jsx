import Button from './Button';
import { buttonGroup } from '../lib/constants';

export default function ButtonGroup({
  onRemoveAllItems,
  onResetItems,
  onMarkAllPacked,
  onMarkAllUnpacked,
}) {
  const handleOnClick = (text) => {
    switch (text) {
      case 'Remove all items':
        onRemoveAllItems();
        break;
      case 'Reset to initial':
        onResetItems();
        break;
      case 'Mark all as complete':
        onMarkAllPacked();
        break;
      case 'Mark all as incomplete':
        onMarkAllUnpacked();
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
