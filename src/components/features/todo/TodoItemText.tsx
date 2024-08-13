import { Todo } from "@/context/TodoStore/todoTypes";
import { memo } from "react";

type TodoItemTextProps = {
  todo: Todo;
  onClick?: () => void;
};
const completedStyle = (todo: Todo) =>
  todo.completed ? "line-through" : "dark:text-neutral-dark-light-grayish-blue";

const TodoItemText = memo(({ todo, ...props }: TodoItemTextProps) => {
  return (
    <div
      className={completedStyle(todo) + " flex-grow cursor-pointer"}
      {...props}
    >
      {todo.text}
    </div>
  );
});

export default TodoItemText;
