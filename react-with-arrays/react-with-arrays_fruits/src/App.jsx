import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Grapes", color: "Purple" },
    { id: 4, name: "Orange", color: "Orange" },
    { id: 5, name: "Lemon", color: "Yellow" },
    { id: 6, name: "Blueberry", color: "Blue" },
    { id: 7, name: "Strawberry", color: "Red" },
    { id: 8, name: "Pineapple", color: "Brown" },
    { id: 9, name: "Mango", color: "Orange" },
    { id: 10, name: "Watermelon", color: "Green" }
  ];

  return (
    <div className="app">
      <ul>
      {fruits.map(({ name, color }) => (
        <Card name={name} color={color} />
      ))}
      </ul>
    </div>
  );
}
