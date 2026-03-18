import { F2Card } from "./F2Card";
import "./index.css";

export function App() {
  return (
    <>
      <F2Card />
      <div className="bg-black/10 w-full min-h-[90vh] p-16 flex flex-col items-center">
        <div className="w-[80vw] 2xl:max-w-125">
          <h1 className="text-xl border-b border-[#e0bfff] w-fit pb-2 pr-2">Skills</h1>
          <div className="p-2 mt-2">
            <h2>Programming</h2>
            <div className="flex flex-row gap-4 flex-wrap p-2 text-xs">
              <p className="highlight">HTML</p>
              <p className="highlight">CSS</p>
              <p className="highlight">JavaScript</p>
              <p className="highlight">TypeScript</p>
              <p className="highlight">C</p>
            </div>
          </div>

          <div className="p-2">
            <h2>System Administration</h2>
            <div className="flex flex-row gap-4 flex-wrap p-2 text-xs">
              <p className="highlight">Docker</p>
              <p className="highlight">Linux (Debian / Ubuntu / Arch)</p>
              <p className="highlight">Proxmox</p>
            </div>
          </div>

          <div className="p-2">
            <h2>Languages</h2>
            <div className="flex flex-row gap-4 flex-wrap p-2 text-xs">
              <p className="highlight">French (Native)</p>
              <p className="highlight">English (~B2)</p>
              <p className="highlight">Japanese (~A1)</p>
            </div>
          </div>

          <div className="p-2">
            <h2>Miscellaneous</h2>
            <div className="flex flex-row gap-4 flex-wrap p-2 text-xs">
              <p className="highlight">Figma / Adobe Illustrator (Graphics)</p>
              <p className="highlight">Adobe Photoshop (Graphics)</p>
              <p className="highlight">Adobe Premiere (Graphics)</p>
              <p className="highlight">Blender (3D)</p>
              <p className="highlight">FL Studio 21 (Sound)</p>
            </div>
          </div>

          <h1 className="text-xl border-b border-[#e0bfff] w-fit pb-2 pr-2 mt-8">Education</h1>
          <div className="p-2 mt-2">
            <div>
              <p className="text-xs opacity-60">2016-2022</p>
              <h2>Decroly School</h2>
            </div>
            <div className="flex flex-col gap-2 p-2 text-xs">
              <p className="highlight">High School</p>
              <p className="highlight">Options Art, History of Art and Graphic Design</p>
            </div>
          </div>

          <div className="p-2">
            <div>
              <p className="text-xs opacity-60">2022-2023</p>
              <h2>Mathematics at Robert Catteau</h2>
            </div>
            <div className="flex flex-col gap-2 p-2 text-xs">
              <p className="highlight">Preparatory class in Mathematics</p>
            </div>
          </div>

          <div className="p-2">
            <div>
              <p className="text-xs opacity-60">2023-2025</p>
              <h2>Computer Science - ULB</h2>
            </div>
            <div className="flex flex-col gap-2 p-2 text-xs">
              <p className="highlight">Bachelor in Computer Sciences</p>
            </div>
          </div>
          <div className="p-2">
            <div>
              <p className="text-xs opacity-60">2025-Now</p>
              <h2>42 Belgium</h2>
            </div>
            <div className="flex flex-col gap-2 p-2 text-xs">
              <p className="highlight">Programming school of the 42 Network</p>
              <p className="highlight">Learning C and Python3</p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
