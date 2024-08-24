// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { useState } from "react";
function App() {
  type Dot = {
    x: number;
    y: number;
    color: string;
  };

  const [dots, setDots] = useState<Dot[]>([]);
  const [deletedDots, setDeletedDots] = useState<Dot[]>([]);
  function handleReset() {
    setDots([]);
    setDeletedDots([]);
  }

  function handleUndo() {
    if (!dots.length) {
      return;
    }
    //borrar de listOfDots el ultimo elemento
    const newDots = [...dots];
    const deletedDot = newDots.pop()!;
    setDots(newDots);

    //agregar el elemento eliminado a deletedDots
    const listDeleted = [...deletedDots];
    listDeleted.push(deletedDot);
    setDeletedDots(listDeleted);
  }

  function handleRedo() {
    if (!deletedDots.length) {
      return;
    }
    const listDeleted = [...deletedDots];
    //saco el ultimo elemento de deletedDots
    const deletedDot = listDeleted.pop();
    setDeletedDots(listDeleted);
    //sumo el ultimo elemento a listOfDots
    const newDots = [...dots];
    newDots.push(deletedDot);
    setDots(newDots);
  }

  function colorAleatorio() {
    const coloresHex = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FFA500",
      "#800080",
    ];
    const indiceAleatorio = Math.floor(Math.random() * coloresHex.length);
    return coloresHex[indiceAleatorio];
  }
  function handleClick(event) {
    const x = event.clientX - 20;
    const y = event.clientY - 70;
    const color = colorAleatorio();

    setDots((prevDots) => [...prevDots, { x, y, color }]);
  }

  return (
    <div className="bg-red-500 flex justify-center p-2 relative h-[100dvh] overflow-hidden">
      <div className="bg-white w-full h-full m-auto ">
        <div className="space-x-5">
          <button
            onClick={handleUndo}
            className="bg-green-500 m-2 p-2 rounded-md text-white"
          >
            Undo
          </button>
          <button
            onClick={handleRedo}
            className="bg-green-500 m-2 p-2 rounded-md text-white"
          >
            Redo
          </button>
          <button
            onClick={handleReset}
            className="bg-green-500 m-2  p-2 rounded-md text-white"
          >
            Reset
          </button>{" "}
        </div>
        <div onClick={handleClick} className=" h-[800px] ">
          {dots.map((dot) => (
            <div
              style={{
                marginLeft: dot.x,
                marginTop: dot.y,
                background: dot.color,
              }}
              className="rounded-full  h-10 w-10 absolute "
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
