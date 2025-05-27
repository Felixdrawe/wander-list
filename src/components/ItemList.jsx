export default function ItemList({ initialItems }) {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} packed={item.packed} />
      ))}
    </ul>
  );
}

const handleOnChange = (event) => {
  console.log(event.target.checked);
};

function Item({ name, packed }) {
  // console.log(name);
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={packed} onChange={handleOnChange} />
        {name}
      </label>
      <button className="">❌</button>
    </li>
  );
}
