import { cn } from "@/lib/utils";
import { gap } from "../darkmode/colorStyles";
import CrossIcon from "../icons/CrossIcon";
import TodoListItemText from "./TodoListItemText";

type TodoListProps = {
  todos: Todo[];
  toggleTodoCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
  className: string;
};

function TodoList(props: TodoListProps) {
  return (
    <ul className={cn("shadow-xl", props.className)}>
      {props.todos.map((todo) => (
        <div
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
        </div>
      ))}
    </ul>
  );
}

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default TodoList;
