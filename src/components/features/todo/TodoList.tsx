import { cn } from "@/lib/utils";
import { AnimatePresence, Reorder } from "framer-motion";
import useTodo from "@/components/features/todo/todostore/useTodo";
import TodoItem from "./TodoItem";
import { darkmodeBg, todoBg } from "../darkmode/colorStyles";

type TodoListProps = {
  className?: string;
};

function TodoList(props: TodoListProps) {
  const { setTodos, removeTodo, toggleTodoCompleted, currentFilterTodos } =
    useTodo();

  return (
    <AnimatePresence>
      <Reorder.Group
        axis="y"
        values={currentFilterTodos}
        onReorder={setTodos}
        className={cn(
          `${todoBg} ${darkmodeBg} rounded-t-lg shadow-2xl`,
          props.className ?? ""
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {currentFilterTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoCompleted={toggleTodoCompleted}
            removeTodo={removeTodo}
          />
        ))}
      </Reorder.Group>
    </AnimatePresence>
  );
}

export default TodoList;
