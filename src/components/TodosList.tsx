

export function TodosList({todos}){
    return (
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
                  // let newCopy = structuredClone(todos);
                  // let found = newCopy.findIndex((t) => t.id === todo.id);
                  // newCopy[found].isCompleted = !newCopy[found].isCompleted;

                  fetch(`http://localhost:3001/todos/${todo.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      isCompleted: !todo.isCompleted,
                    }),
                  });
                  // setTodos(newCopy);
                }}
              >
                {todo.text}
              </h2>
              <button
                onClick={() => {
                  // let newCopyy = structuredClone(todos);
                  // let found = newCopyy.findIndex((t) => t.id === todo.id);
                  // newCopyy.splice(found, 1);
                  // setTodos(newCopyy);
                  fetch(`http://localhost:3001/todos/${todo.id}`, {
                    method: "DELETE",
                  });
                }}
                className="Xbutton"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}