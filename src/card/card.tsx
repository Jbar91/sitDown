import { Students } from "../list";
import "./card.scss";

export function Card() {
  const studentsList = Students.sort((a, b) => 0.5 - Math.random());
  const half = Math.ceil(studentsList.length / 2);
  const firstHalf = studentsList.slice(0, half);
  const secondHalf = studentsList.slice(half);

  return (
    <>
      <div className="container1">
        {firstHalf.map((student) => (
          <div key={student.name} className="leftContainer">
            <img src={student.img} alt={student.name} />
            <h2>{student.name}</h2>
          </div>
        ))}
      </div>

      <div className="container2">
        {secondHalf.map((student) => (
          <div key={student.name} className="rightContainer">
            <img src={student.img} alt={student.name} />
            <h2>{student.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
