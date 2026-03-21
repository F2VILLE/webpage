import { Skills } from "./components/Skills";
import { F2Card } from "./components/F2Card";
import "./index.css";
import { Playerctl } from "./components/Playerctl";

export function App() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full -z-10" id="webcard" ></div>

      <Playerctl />
      <F2Card />
      <Skills />
    </>
  );
}

export default App;
