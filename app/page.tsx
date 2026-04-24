import Canvas from "./components/Canvas";
// import Toolbar from "./components/ToolBar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="write-and-draw">
          <div className="canvas-container container mx-auto" id="canvas-container">
            {/* toolbar */}
            {/* <Toolbar /> */}
            {/* canvas */}
            <Canvas />
          </div>
        </div>
      </main>
    </div>
  );
}
