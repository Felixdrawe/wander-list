export default function Button({ type, children, click }) {
  return (
    <button className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`} onClick={click}>
      {children}
    </button>
  );
}
