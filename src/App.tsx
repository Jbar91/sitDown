import { useState } from "react";
import "./App.scss";
import { Cards } from "./cards/cards";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Students } from "./list";
import { useStudents } from "./hook/useStudents";

function App() {
  const { handleOnDragEnd } = useStudents();

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Cards></Cards>
        <p>mesa de los profes</p>
      </DragDropContext>
    </>
  );
}

export default App;
