import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
// here we create the use state method
//we will the n bring down setInpoutText as a prop into the component
// we create another state to store the to dos
//we pass down the todos which is the stored date into the to do list

function App() {
  let [inputText, setInputText] = useState("");
  let [toDos, setToDos] = useState([]);
               
  return (
    <div className="App">
      <header>To Do List</header>
      <Form
        
        inputText={inputText}
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
