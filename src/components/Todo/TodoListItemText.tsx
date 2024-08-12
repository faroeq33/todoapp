import { Todo } from "./TodoList";

function TodoListItemText({ todo }: { todo: Todo }) {
  const completedStyle = (todo: Todo) =>
    todo.completed
      ? "line-through"
      : "dark:text-neutral-dark-light-grayish-blue";

  return <div className={completedStyle(todo) + " flex-grow"}>{todo.text}</div>;
}

export default TodoListItemText;
