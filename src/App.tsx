import "./App.scss";
import { Cards } from "./cards/cards";
import { DragDropContext } from "react-beautiful-dnd";
import { useStudents } from "./hook/useStudents";

function App() {
  const { handleOnDragEnd } = useStudents();
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Cards></Cards>
        <p>Mesa de los profes</p>
        <button onClick={refreshPage}>Recolocar</button>
      </DragDropContext>
    </>
  );
}

export default App;
