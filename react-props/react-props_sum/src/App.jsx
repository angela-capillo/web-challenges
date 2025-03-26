function Sum({ number1, number2 }) {
  const sum = number1 + number2;
  return <h1>{number1} + {number2} = {sum}</h1>;
}

export default function App() {
  return <Sum number1= {5} number2= {10} />;
}
