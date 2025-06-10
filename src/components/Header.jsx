import Counter from './Counter';
import Logo from './Logo';
import useItemsStore from '../stores/itemsStore';

export default function Header() {
  const items = useItemsStore((state) => state.items);
  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  const totalNumberOfItems = items.length;

  return (
    <header>
      <Logo />
      <Counter numberOfItemsPacked={numberOfItemsPacked} totalNumberOfItems={totalNumberOfItems} />
    </header>
  );
}
