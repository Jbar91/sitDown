import { Droppable } from 'react-beautiful-dnd';
import { Card } from '../card/card';
import './cards.scss';
import { Students } from '../list';

export function Cards() {
  const studentsList = Students.sort((a, b) => 0.5 - Math.random());
  const half = Math.ceil(studentsList.length / 2);
  const firstHalf = studentsList.slice(0, half);
  const secondHalf = studentsList.slice(half);

  return (
    <div className="classroom">
      <Droppable droppableId="students-left">
        {(provided) => (
          <ul
            className="container1"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Card students={firstHalf} section="left-container"></Card>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <Droppable droppableId="students-right">
        {(provided) => (
          <ul
            className="container2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Card students={secondHalf} section="right-container"></Card>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
