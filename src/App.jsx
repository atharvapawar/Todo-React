import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo("")
  };
  
  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(todos);
  };

  return (
    <div className=" h-screen ">
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            name=""
            id=""
            className="bg-white w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 text-white p-1 px-1 mx-6 text-sm font-bold rounded-md"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold ">Your Todos</h2>
        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={todo} className="todo flex w-1/3 justify-between">
                <div className={item.isCompleted ? "" : "line-through"}>
                  {item.todo}
                </div>
                <div className="buttons flex gap-3">
                  <button
                    onClick={handleEdit}
                    className=" bg-violet-800 hover:bg-violet-950 text-white p-1 px-2 m-2 text-sm font-bold rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className=" bg-violet-800 hover:bg-violet-950 text-white p-1 px-1 text-sm font-bold rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
