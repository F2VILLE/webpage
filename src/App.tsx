import { Skills } from "./components/Skills";
import { F2Card } from "./components/F2Card";
import "./index.css";
import { Playerctl } from "./components/Playerctl";

export function App() {
  return (
    <>
      <Playerctl />
      <F2Card />
      <Skills />
    </>
  );
}

export default App;
