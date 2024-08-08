import { useRef, useState } from "react";
import TodoList, { Todo } from "../Todo/TodoList";

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

type View = "all" | "active" | "completed";

function TodoSection() {
  const lastId = useRef(initialTodos[initialTodos.length - 1].id);
  const [todo, setTodo] = useState<Todo>(initialTodos[0]);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const [view, setView] = useState<View>("all");

  const amount = todos.filter((todo) => !todo.completed).length;

  const addTodos = () => {
    setTodos([...todos, todo]);
  };

  const editTodo = (todo: Todo) => {
    setTodo(todo);
  };

  const toggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit");
    console.log("todo", lastId.current);
    console.log("lastId", lastId.current);
    if (todo.id !== lastId.current) {
      addTodos();
      lastId.current++;
    }
  };

  const views = {
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
  };

  return (
    <section className="w-full todo-section">
      <form action="" className="flex flex-col gap-6" onSubmit={onSubmit}>
        <input
          type="text"
          className="w-full p-2 rounded-md"
          placeholder="Add a new todo"
          onChange={(e) =>
            editTodo({
              id: lastId.current + 1,
              text: e.target.value,
              completed: false,
            })
          }
        />
        <input type="submit" value="Add" />
        <TodoList
          // takes view from state and passes it to the todos prop
          todos={views[view]}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodo={removeTodo}
        />

        <div className="div">
          <div className="flex justify-between">
            <div className="bg-white elem">{amount} items left</div>
            <div className="bg-white elem" onClick={clearCompleted}>
              clear completed
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div onClick={() => setView("all")}>All</div>
          <div onClick={() => setView("active")}>Active</div>
          <div onClick={() => setView("completed")}>completed</div>
        </div>
      </form>
    </section>
  );
}

export default TodoSection;
