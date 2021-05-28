import React from "react";

//we are creating a form component
//we create the inputeTextHandler to genreate a function everytime the input text will be used
function Form(props) {
  // {setToDos, toDos, setInputText, inputText }
  let inputTextHandler = (e) => {
    console.log(e.target.value);
    props.setInputText(e.target.value);
  };

  let statusHandler = function (e) {
    props.setStatus(e.target.value);
  };

  // we creat the submittexthandler to generate the set to dos function
  //we add the ...props.todos to show anything in the array and then to add a new
  //object to the array we use input text and generate it a random id
  //we then set input text to be an empty string so the items in the imput text are deleted and stored

  let submitToDoHandler = (e) => {
    e.preventDefault();
    props.setToDos([
      ...props.toDos,
      { text: props.inputText, completed: false, id: Math.random() * 1000000 },
    ]);
    props.setInputText("");
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default Form;
