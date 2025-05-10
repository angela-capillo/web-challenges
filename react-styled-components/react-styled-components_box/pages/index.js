import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponent } from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.jsx";

export default function HomePage() {
  return (
    <div>
      <BoxWithStyledComponent />
      <BoxWithStyledComponent $isBlack />
      Bla bla
    </div>
  );
}
