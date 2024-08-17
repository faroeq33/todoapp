// import { Reorder } from "framer-motion";
import TodoItemText from "./TodoItemText";
import CrossIcon from "../../../assets/icons/CrossIcon";
import Checkbox from "../../custom-ui/Checkbox";
import { Todo } from "./todostore/todoTypes";
import { gap } from "../darkmode/colorStyles";
import { useTodoStore } from "./todostore/TodoContext";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const { removeTodo, toggleTodoCompleted } = useTodoStore();

  return (
    <div
      // value={todo}
      className={`flex items-baseline todo-row text-neutral-dark-dark-grayish-blue border-b  border-neutral-dark-very-dark-grayish-blue/10 rounded-t-lg ${gap} px-4 py-6`}
      key={todo.id}
    >
      <Checkbox
        id={`todoitem-` + todo.id}
        // label={"label-" + todo.id}
        checked={todo.completed}
        // defaultChecked={todo.completed}
        onClick={() => toggleTodoCompleted(todo.id)}
      />

      <TodoItemText todo={todo} />
      <div className="">
        <button onClick={() => removeTodo(todo.id)}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
