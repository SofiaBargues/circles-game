// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { useState } from "react";

function App() {
  const [listOfDots, setListOfDots] = useState<{ x: number; y: number }[]>([]);
  const [deletedDots, setDeletedDots] = useState<{ x: number; y: number }[]>(
    []
  );
  function handleReset() {
    setListOfDots([]);
    setDeletedDots([]);
  }

  function handleUndo() {
    //borrar de listOfDots el ultimo elemento
    let list = [...listOfDots];
    let deleted = list.pop();
    setListOfDots(list);

    //agregar el elemento eliminado a deletedDots
    let listDeleted = [...deletedDots];
    listDeleted.push(deleted);
    setDeletedDots(listDeleted);
  }

  function handleRedo() {
    let listDeleted = [...deletedDots];
    //saco el ultimo elemento de deletedDots
    let deleted = listDeleted.pop();
    setDeletedDots(listDeleted);
    //sumo el ultimo elemento a listOfDots
    let list = [...listOfDots];
    list.push(deleted);
    setListOfDots(list);
  }

  function handleClick(event) {
    const x = event.clientX - 20;
    const y = event.clientY - 80;

    setListOfDots((prevDots) => [...prevDots, { x, y }]);
  }
  return (
    <div className="bg-red-500 flex justify-center h-screen relative">
      <div className="bg-white w-[950px] h-[900px] m-auto ">
        {" "}
        <div>
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
    </div>
  );
}

export default App;
