import { cn } from "@/lib/utils";
import { AnimatePresence, Reorder } from "framer-motion";
import TodoItem from "./TodoItem";
import { useTodoStore } from "./todostore/TodoContext";
import { darkmodeBg, todoBg } from "../darkmode/colorStyles";
import { useMemo } from "react";

type TodoListProps = {
  className?: string;
};

function TodoList(props: TodoListProps) {
  const { todos, setTodos, view } = useTodoStore();

  const currentTodos = useMemo(() => {
    const views = {
      all: todos,
      active: todos.filter((todo) => !todo.completed),
      completed: todos.filter((todo) => todo.completed),
    };
    return views[view];
  }, [todos, view]);

  return (
    <>
      <AnimatePresence>
        <Reorder.Group
          axis="y"
          values={currentTodos}
          onReorder={setTodos}
          className={cn(
            `${todoBg} ${darkmodeBg} rounded-t-lg shadow-2xl`,
            props.className ?? ""
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {currentTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </>
  );
}

export default TodoList;
