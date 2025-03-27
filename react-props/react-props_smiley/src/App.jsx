function Smiley({ isHappy }) {
  return <h1>{ isHappy === true ? ":)" : ":(" }</h1>;

}

export default function App() {
  return <Smiley isHappy= {false} />;
}
