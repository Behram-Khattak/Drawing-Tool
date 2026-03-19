import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <div className="body bg-background text-foreground w-screen h-screen">
      <main className="">
        <div className="write-and-draw">
          <div className="canvas-container">
            <div className="canvas-motivation-text-content flex flex-col items-center sm:items-start">
              <h1 className="text-4xl font-bold text-center sm:text-left">
                Here is your canvas, start drawing!
              </h1>
              <br />
              <p>
                You can use the tools on the left to create your masterpiece. Happy drawing!
              </p>
            </div>
            <Canvas />
          </div>
        </div>
      </main>
    </div>
  );
}
