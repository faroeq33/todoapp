import { cn } from "@/lib/utils";
import { gap } from "../darkmode/colorStyles";
import CrossIcon from "../icons/CrossIcon";
import TodoListItemText from "./TodoListItemText";
import { Reorder } from "framer-motion";
import { Dispatch } from "react";

type TodoListProps = {
  todos: Todo[];
  toggleTodoCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
  setTodos: Dispatch<React.SetStateAction<Todo[]>>;
  className: string;
};

function TodoList(props: TodoListProps) {
  return (
    <Reorder.Group
      axis="y"
      values={props.todos}
      onReorder={props.setTodos}
      className={cn("shadow-xl", props.className)}
    >
      {props.todos.map((todo) => (
        <Reorder.Item
          value={todo}
          className={`flex items-baseline todo-row text-neutral-dark-dark-grayish-blue border-b  border-neutral-dark-very-dark-grayish-blue/10 rounded-t-lg  ${gap}   px-4 py-6`}
          key={todo.id}
        >
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => props.toggleTodoCompleted(todo.id)}
          />
          <TodoListItemText todo={todo} />
          <div className="">
            <button onClick={() => props.removeTodo(todo.id)}>
              <CrossIcon />
            </button>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default TodoList;
