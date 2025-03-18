import Circle from "./components/Circle/Circle";
import Pentagon from "./components/Pentagon/Pentagon";
import Square from "./components/Square/Square";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle();
const pentagonElement = Pentagon();
const squareElement = Square();

root.append(circleElement, squareElement, pentagonElement);
