import { darkmodeBg, padding, roundness } from "../darkmode/colorStyles";
import { memo, useState } from "react";
import { Todo } from "./todostore/todoTypes";
import { initialTodos } from "./todostore/initialTodos";
import useTodo from "./todostore/useTodo";

function AddTodoField() {
  const { addTodos, lastId } = useTodo();
  const [todo, setTodo] = useState<Todo>(initialTodos[0]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit");
    addTodos(todo);
  };

  return (
    <form className="wrapper" onSubmit={onSubmit}>
      <input
        type="text"
        className={`w-full ${padding} ${roundness} ${darkmodeBg} dark:text-primary-check-background`}
        placeholder="Create a new todo..."
        onChange={(e) =>
          setTodo({
            id: lastId.current + 1,
            text: e.target.value,
            completed: false,
          })
        }
      />
      <input type="submit" value="add" className="hidden" />
    </form>
  );
}

export default memo(AddTodoField);
