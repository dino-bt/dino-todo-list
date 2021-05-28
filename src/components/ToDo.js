import React from "react";
//we add the text element as the prop
//we create the delete handler it will will run through the lsit and check the ids
//if the id is not equal it wont delet but if it is it will delete.
function ToDo(props) {
  //{ text, toDo, toDos, setToDos }
  const deleteHandler = () => {
    props.setToDos(props.toDos.filter((el) => el.id !== props.toDo.id));
  };
  // here we create  the handlers that will change the state of the key completed to true and false on each click we do this
  //so we can later on manipulate the function to create something in css
  let completeHandler = () => {
    props.setToDos(
      props.toDos.map((item) => {
        if (item.id === props.toDo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  //console.log(toDo);
  // we manipulate the css and put a line through every time we click on the completed button
  return (
    <div className="todo">
      <li className={`todo-item ${props.toDo.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default ToDo;
