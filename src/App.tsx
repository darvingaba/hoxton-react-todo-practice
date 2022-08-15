
import { useState } from 'react';
import './App.css'

function App() {
  let [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      isCompleted: true,
      priority: "high",
    },
    {
      id: 2,
      text: "sleep more",
      isCompleted: true,
      priority: "low",
    },
    {
      id: 3,
      text: "eat more",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: 4,
      text: "train more",
      isCompleted: false,
      priority: "high",
    },
    {
      id: 5,
      text: "work more",
      isCompleted: false,
      priority: "low",
    },
  ]);
  let [input,setInput]= useState('')
  
  // function changeCompleted(){
  //   let newArr =structuredClone(todos)
  //   let found = newArr.find((l)=>l.id===todos.id)
  //   found.isCompleted
  //   setTodos(found)
  // }
  function selectValue(){
    let select = document.getElementById("select").value;
    for(let elem of todos){
      if(elem.priority===select){
        let highPriority = todos.filter((l)=>l.priority==="high")
        setTodos(highPriority)
      } else if(elem.priority==="medium"){
        let mediumPriority = todos.filter((l)=>l.priority==="medium")
        setTodos(mediumPriority)
      }
      else if(elem.priority==="low"){
        let lowPriority = todos.filter((l)=>l.priority==="low")
        setTodos(lowPriority)
      } else if(elem.priority==="all"){
        setTodos(todos)
      }
    } 
  }
  

  return (
    <div className="App">
      <h1>TODO APP</h1>
      
      <h3>Select important tasks</h3>
      <select 
       onChange={selectValue}
       id='select'>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <form action="#">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          name="text"
          type="text"
          placeholder="What needs to be done?"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            let newArr = [
              ...todos,
              { id: todos.length + 1, text: input, isCompleted: false ,priority: "medium"},
            ];
            setTodos(newArr);
          }}
          type="submit"
        >
          Add
        </button>
      </form>

      <div className="todosList">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={
                todo.isCompleted === true ? "isCompleted" : "notCompleted"
              }
            >
              <h2
                onClick={() => {
                  let newCopy = structuredClone(todos);
                  let found = newCopy.findIndex((t) => t.id === todo.id);
                  newCopy[found].isCompleted = !newCopy[found].isCompleted;
                  setTodos(newCopy);
                }}
              >
              {todo.text}
              </h2>
              <button
                onClick={() => {
                  let newCopyy = structuredClone(todos);
                  let found = newCopyy.findIndex((t) => t.id === todo.id);
                  newCopyy.splice(found, 1);
                  setTodos(newCopyy);
                }}
                className="Xbutton"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
