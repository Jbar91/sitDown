import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Students } from "../list";
import "./card.scss";

export function Card() {
  const studentsList = Students.sort((a, b) => 0.5 - Math.random());
  const half = Math.ceil(studentsList.length / 2);
  const firstHalf = studentsList.slice(0, half);
  const secondHalf = studentsList.slice(half);

  return (
    <>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="students">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <ul className="container1">
                {firstHalf.map((student, index) => (
                  <Draggable
                    key={student.name}
                    draggableId={student.name}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        key={student.name}
                        className="leftContainer"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img src={student.img} alt={student.name} />
                        <h2>{student.name}</h2>
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              <ul className="container2">
                {secondHalf.map((student, index) => (
                  <Draggable
                    key={student.name}
                    draggableId={student.name}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        key={student.name}
                        className="rightContainer"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img src={student.img} alt={student.name} />
                        <h2>{student.name}</h2>
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
