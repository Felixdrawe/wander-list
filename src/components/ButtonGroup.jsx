import Button from './Button';

import { buttonGroup } from '../lib/constants';

export default function ButtonGroup({ onRemoveAllItems }) {
  const handleOnClick = (text) => {
    if (text === 'Remove all items') {
      onRemoveAllItems();
      
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
