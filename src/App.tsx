
import { useEffect, useState } from 'react';
import './App.css'
import { AddTodo } from './components/AddTodo';
import { ImpTodos } from './components/ImpTodos';
import { SearchTodo } from './components/SearchTodo';
import { TodosList } from './components/TodosList';
type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
  priority: string;
}
function App() {
  let [todos, setTodos] = useState<Todo[]>([]);
  let [input,setInput]= useState('')
  let[search,setSearch]=useState('')
  console.log(search)

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  },[]);
  
  // let params = useParams();
  
  function selectValue(){
    let select = document.getElementById("select").value;
    console.log(select)
    for(let elem of todos){
      if(elem.priority==="high"){
        let highPriority = todos.filter((l)=>l.priority==="high")
        console.log(highPriority)
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
      
      <ImpTodos selectValue={selectValue}/>
 
      <SearchTodo />
      
      <AddTodo 
        setInput={setInput}
        input={input}/>

      <TodosList todos={todos}/>
    </div>
  );
}

export default App
