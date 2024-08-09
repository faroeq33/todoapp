import { useRef, useState } from "react";
import TodoList, { Todo } from "../Todo/TodoList";
import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
  roundness,
} from "../darkmode/colorStyles";

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

type TodoSectionProps = {
  className: string;
};

function TodoSection(props: TodoSectionProps) {
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
    <section className={props.className}>
      <form action="" className={`flex flex-col ${gap} `} onSubmit={onSubmit}>
        <input
          type="text"
          className={`w-full ${padding} ${roundness} ${darkmodeBg} `}
          placeholder="Create a new todo..."
          onChange={(e) =>
            editTodo({
              id: lastId.current + 1,
              text: e.target.value,
              completed: false,
            })
          }
        />
        <input type="submit" value="Add" className="hidden" />
        <div className={darkmodeBg}>
          <TodoList
            // takes view from state and passes it to the todos prop
            todos={views[view]}
            toggleTodoCompleted={toggleTodoCompleted}
            removeTodo={removeTodo}
            className={`${darkmodeBg} ${padding} ${roundness}`}
          />

          <div
            className={`flex justify-between ${padding} dark:text-neutral-dark-very-dark-grayish-blue`}
          >
            <div className="">{amount} items left</div>
            <div className="" onClick={clearCompleted}>
              clear completed
            </div>
          </div>
        </div>
        <div
          className={`${darkmodeBg} flex justify-center ${gap} ${padding} ${darkmodeText}`}
        >
          <div
            onClick={() => setView("all")}
            className={view === "all" ? "text-primary-bright-blue" : ""}
          >
            All
          </div>
          <div
            onClick={() => setView("active")}
            className={view === "active" ? "text-primary-bright-blue" : ""}
          >
            Active
          </div>
          <div
            onClick={() => setView("completed")}
            className={view === "completed" ? "text-primary-bright-blue" : ""}
          >
            completed
          </div>
        </div>
      </form>
    </section>
  );
}

export default TodoSection;
