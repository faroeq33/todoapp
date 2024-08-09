import { gap, padding } from "../darkmode/colorStyles";

type TodoListProps = {
  todos: Todo[];
  toggleTodoCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
  className: string;
};

function TodoList(props: TodoListProps) {
  return (
    <ul className={props.className}>
      {props.todos.map((todo) => (
        <div
          className={`flex items-baseline todo-row dark:text-neutral-dark-dark-grayish-blue border-b border-neutral-dark-very-dark-grayish-blue rounded-t-lg  ${gap} ${padding}`}
          key={todo.id}
        >
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => props.toggleTodoCompleted(todo.id)}
          />
          <li
            className={
              todo.completed
                ? "line-through"
                : "dark:text-neutral-dark-light-grayish-blue"
            }
          >
            {todo.text}
          </li>
          <button onClick={() => props.removeTodo(todo.id)}>X</button>
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
