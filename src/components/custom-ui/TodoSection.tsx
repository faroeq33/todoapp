import { useState } from "react";
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const initialTodos = [
  {
    id: 1,
    text: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: 2,
    text: "Jog around the park 3x",
    completed: false,
  },
  {
    id: 3,
    text: "10 minutes meditation",
    completed: false,
  },
  {
    id: 4,
    text: "Read for 1 hour",
    completed: false,
  },
  {
    id: 5,
    text: "Pick up groceries",
    completed: false,
  },
  {
    id: 6,
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

function TodoSection() {
  const [todo, setTodo] = useState<Todo>(initialTodos[0]);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodos = () => {
    setTodos([...todos, todo]);
  };

  const addTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTodo({ id: todos.length + 1, text: e.target.value, completed: false });
  };

  const toggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodos();
  };

  return (
    <section className="w-full todo-section">
      <form action="" className="flex flex-col gap-6" onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full p-2 rounded-md"
          placeholder="Add a new todo"
          onChange={addTodo}
        />
        <input type="submit" value="Add" />
        <ul className="bg-white">
          {/* temporary bgs, they will be removed because I will controll them in the parent */}
          {todos.map((todo) => (
            <div className="flex items-baseline gap-4 todo-row" key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={() => {
                  toggleTodoCompleted(todo.id);
                }}
              />
              <li className={todo.completed ? "line-through" : ""}>
                {todo.text}
              </li>
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          ))}
        </ul>
        <div className="div">
          <div className="flex justify-between">
            <div className="bg-white elem">6 items left</div>
            <div className="bg-white elem">clear completed</div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
      </form>
    </section>
  );
}

export default TodoSection;
