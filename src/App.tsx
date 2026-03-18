import { F2Card } from "./F2Card";
import "./index.css";

export function App() {
  return (
    <>
      <F2Card />
      <div className="bg-black/10 w-full h-[90vh] p-16">
        <h1 className="text-xl border-b border-[#e0bfff] w-fit pb-2 pr-2">Skills</h1>
        <div className="p-2 mt-2">
          <h2>Programming</h2>
          <div className="flex flex-row gap-4 p-2 text-xs">
            <p className="highlight">HTML</p>
            <p className="highlight">CSS</p>
            <p className="highlight">JavaScript</p>
            <p className="highlight">TypeScript</p>
            <p className="highlight">C</p>
          </div>
        </div>

        <div className="p-2">
          <h2>System Administration</h2>
          <div className="flex flex-row gap-4 p-2 text-xs">
            <p className="highlight">Docker</p>
            <p className="highlight">Linux (Debian / Ubuntu / Arch)</p>
            <p className="highlight">Proxmox</p>
          </div>
        </div>

        <div className="p-2">
          <h2>Languages</h2>
          <div className="flex flex-row gap-4 p-2 text-xs">
            <p className="highlight">French (Native)</p>
            <p className="highlight">English (~B2)</p>
            <p className="highlight">Japanese (~A1)</p>
          </div>
        </div>

        <div className="p-2">
          <h2>Miscellaneous</h2>
          <div className="flex flex-row gap-4 p-2 text-xs">
            <p className="highlight">Figma / Adobe Illustrator</p>
            <p className="highlight">Adobe Photoshop</p>
            <p className="highlight">Adobe Premiere</p>
            <p className="highlight">Blender (3D)</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
