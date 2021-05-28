import React from "react";

import ToDo from "./ToDo";
// if we pass the prop with curly brackets it acts like a prop and we dont need to add props
function ToDoList({ toDos, setToDos }) {
  console.log(toDos);
  // we will map through toDos in order to get each object of todos
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDos.map((toDo) => (
          
          <ToDo
            setToDos={setToDos}
            id ={toDo.id}
            toDo={toDo}
            toDos={toDos}
            text={toDo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
