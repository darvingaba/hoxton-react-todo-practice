

export function AddTodo({setInput,input}){
    return (
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
            fetch("http://localhost:3001/todos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: Math.floor(Math.random() * 10000),
                text: input,
                isCompleted: false,
                priority: "medium",
              }),
            });
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    );
}