import { Todo, TodoContainerType } from "@/context/TodoStore/todoTypes";
import { Reorder } from "framer-motion";
import TodoItemText from "./TodoItemText";
import { gap } from "../darkmode/colorStyles";
import CrossIcon from "../../icons/CrossIcon";
import Checkbox from "../../custom-ui/Checkbox";

type TodoItemProps = {
  todo: Todo;
  toggleTodoCompleted: TodoContainerType["toggleTodoCompleted"];
  removeTodo: TodoContainerType["toggleTodoCompleted"];
};

function TodoItem({ todo, toggleTodoCompleted, removeTodo }: TodoItemProps) {
  const toggleComplete = () => toggleTodoCompleted(todo.id);
  return (
    <Reorder.Item
      value={todo}
      className={`flex items-baseline todo-row text-neutral-dark-dark-grayish-blue border-b  border-neutral-dark-very-dark-grayish-blue/10 rounded-t-lg  ${gap}   px-4 py-6`}
      key={todo.id}
    >
      <Checkbox
        id={`todoitem-` + todo.id}
        // label={"label-" + todo.id}
        checked={todo.completed}
        // defaultChecked={todo.completed}
        onClick={toggleComplete}
      />

      <TodoItemText todo={todo} onClick={toggleComplete} />
      <div className="">
        <button onClick={() => removeTodo(todo.id)}>
          <CrossIcon />
        </button>
      </div>
    </Reorder.Item>
  );
}

export default TodoItem;
