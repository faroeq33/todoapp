import { useRef, useState } from "react";
import TodoList, { Todo } from "../Todo/TodoList";
import {
  darkmodeBg,
  gap,
  padding,
  roundness,
  todoBg,
} from "../darkmode/colorStyles";
import Filters, { View } from "./Filters";

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
      <form action="" className={`flex flex-col ${gap}`} onSubmit={onSubmit}>
        <input
          type="text"
          className={`w-full ${padding} ${roundness} ${darkmodeBg}`}
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
        <div className={""}>
          <TodoList
            // takes view from state and passes it to the todos prop
            todos={views[view]}
            toggleTodoCompleted={toggleTodoCompleted}
            setTodos={setTodos}
            removeTodo={removeTodo}
            className={`${todoBg} ${darkmodeBg} rounded-t-lg shadow-2xl`}
          />

          <div
            className={`flex justify-between ${todoBg} ${darkmodeBg} ${padding} dark:text-neutral-dark-very-dark-grayish-blue rounded-b-lg capitalize text-sm`}
          >
            <div className="">{amount} items left</div>
            <div className="" onClick={clearCompleted}>
              clear completed
            </div>
          </div>
        </div>
        <Filters setView={setView} view={view} className={todoBg} />
      </form>
    </section>
  );
}

export default TodoSection;
