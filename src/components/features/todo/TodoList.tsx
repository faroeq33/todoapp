import { cn } from "@/lib/utils";
import { AnimatePresence, Reorder } from "framer-motion";
import useTodo from "@/components/features/todo/TodoStore/useTodo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  className: string;
};

function TodoList(props: TodoListProps) {
  const { setTodos, removeTodo, toggleTodoCompleted, currentFilterTodos } =
    useTodo();
  // const todos = views[view]; // Shows the todos based on the view state

  return (
    <AnimatePresence>
      <Reorder.Group
        axis="y"
        values={currentFilterTodos}
        onReorder={setTodos}
        className={cn("shadow-xl", props.className)}
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
