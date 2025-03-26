function Button({ text, color, isDisabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    console.log("Ciao :)");
  }

  return (
    <div>
      <Button text="Cancel" color="salmon" onClick={handleClick} />
      <Button text="Edit" color="rebeccapurple" />
      <Button text="Continue" color="lime" isDisabled />
    </div>
  );
}
