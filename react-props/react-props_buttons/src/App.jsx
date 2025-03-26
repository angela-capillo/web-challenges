function Button({ text, color, isDisabled }) {
  return (<button style={{backgroundColor: color}} disabled={isDisabled}>
    {text}
  </button>)
}

export default function App() {
  return (
    <div>
      <Button text="Cancel" color="salmon" />
      <Button text="Edit" color="rebeccapurple" />
      <Button text="Continue" color="lime" isDisabled />
    </div>
  );
}
