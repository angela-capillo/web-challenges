function Greeting({ name }) {

  return <h1> { name === "Marcell" ? "Hello coach!" : `Hello ${name} !`}</h1>
}

export default function App() {
  return <Greeting name="Marcell" />;
}
