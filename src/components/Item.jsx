export default function Item({ id, name, packed, onItemPacked, onRemoveItem }) {
  const handleOnChange = () => {
    onItemPacked(id);
  };
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={handleOnChange}
          id={`item-${id}`}
          name={`item-${id}`}
        />
        {name}
      </label>
      <button onClick={() => onRemoveItem(id)}>❌</button>
    </li>
  );
}
