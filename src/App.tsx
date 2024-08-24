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

  const canUndo = dots.length;
  function handleUndo() {
    if (!canUndo) {
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

  const canDelete = deletedDots.length;
  function handleRedo() {
    if (!canDelete) {
      return;
    }
    const listDeleted = [...deletedDots];
    //saco el ultimo elemento de deletedDots
    const deletedDot = listDeleted.pop()!;
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
  function handleClick(event: { clientX: number; clientY: number }) {
    const x = event.clientX - 20;
    const y = event.clientY - 70;
    const color = colorAleatorio();
    setDeletedDots([]);
    setDots((prevDots) => [...prevDots, { x, y, color }]);
  }

  return (
    <div className="bg-red-500 flex justify-center p-2 relative h-[100dvh] overflow-hidden">
      <div className="bg-white w-full h-full m-auto ">
        <div className="space-x-5">
          <button
            disabled={!canUndo}
            onClick={handleUndo}
            className={
              "m-2 p-2 rounded-md text-white" +
              (canUndo ? " bg-green-500" : " bg-slate-600")
            }
          >
            Undo
          </button>
          <button
            disabled={!canDelete}
            onClick={handleRedo}
            className={
              "bg-green-500 m-2 p-2 rounded-md text-white" +
              (canDelete ? " bg-green-500" : " bg-slate-600")
            }
          >
            Redo
          </button>
          <button
            disabled={!canDelete && !canUndo}
            onClick={handleReset}
            className={
              "m-2  p-2 rounded-md text-white" +
              (canDelete || canUndo ? " bg-green-500" : " bg-slate-600")
            }
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
