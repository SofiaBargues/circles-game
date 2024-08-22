// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { useState } from "react";

function App() {
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);
  const [listOfDots, setListOfDots] = useState<{ x: number; y: number }[]>([]);

  function handleClick(event) {
    const x = event.clientX - 20;
    const y = event.clientY - 80;

    setClickX(x);
    setClickY(y);
    setListOfDots((prevDots) => [...prevDots, { x, y }]);
  }
  console.log(listOfDots);
  return (
    <div className="bg-red-500 flex justify-center h-screen relative">
      <div
        onClick={handleClick}
        className="bg-white w-[950px] h-[900px] m-auto "
      >
        <button className="bg-green-500 m-2 p-2 rounded-md text-white">
          Undo
        </button>
        <button className="bg-green-500 m-2 p-2 rounded-md text-white">
          Redo
        </button>
        <button className="bg-green-500 m-2  p-2 rounded-md text-white">
          Reset
        </button>
        {listOfDots.map((dot) => (
          <div
            style={{
              marginLeft: dot.x,
              marginTop: dot.y,
            }}
            className="bg-red-900 rounded-full  h-10 w-10 absolute "
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
