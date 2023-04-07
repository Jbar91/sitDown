import { useState } from 'react';
import './App.scss';
import { Cards } from './cards/cards';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Students } from './list';
import { useStudents } from './hook/useStudents';

function App() {
  const { handleOnDragEnd } = useStudents();

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <p>marico el que lo lea</p>
        <Cards></Cards>
      </DragDropContext>
    </>
  );
}

export default App;
