import { cn } from "@/lib/utils";
import { gap } from "../darkmode/colorStyles";
import CrossIcon from "../icons/CrossIcon";
import TodoListItemText from "./TodoListItemText";
import { AnimatePresence, Reorder } from "framer-motion";
import useTodo from "@/context/TodoStore/useTodo";

type TodoListProps = {
  className: string;
};

function TodoList(props: TodoListProps) {
  const { setTodos, removeTodo, toggleTodoCompleted, view, views } = useTodo();
  const todos = views[view]; // Shows the todos based on the view state

  return (
    <AnimatePresence>
      <Reorder.Group
        axis="y"
        values={todos}
        onReorder={setTodos}
        className={cn("shadow-xl", props.className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {todos.map((todo) => (
          <Reorder.Item
            value={todo}
            className={`flex items-baseline todo-row text-neutral-dark-dark-grayish-blue border-b  border-neutral-dark-very-dark-grayish-blue/10 rounded-t-lg  ${gap}   px-4 py-6`}
            key={todo.id}
          >
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => toggleTodoCompleted(todo.id)}
            />
            <TodoListItemText todo={todo} />
            <div className="">
              <button onClick={() => removeTodo(todo.id)}>
                <CrossIcon />
              </button>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </AnimatePresence>
  );
}

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default TodoList;
