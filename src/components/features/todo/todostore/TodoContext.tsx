import {
  createContext,
  useState,
  useRef,
  FC,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { initialTodos } from "./initialTodos";
import { Todo, TodoContainerType, View } from "./todoTypes";

export const TodoProviderContext = createContext(initialTodos);

export function TodoContainer() {
  const lastId = useRef(initialTodos[initialTodos.length - 1].id);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const amount = todos.filter((todo) => !todo.completed).length;

  const addTodos = (todo: Todo) => {
    if (todo.id !== lastId.current) {
      setTodos([...todos, todo]);
      lastId.current++;
    }
  };
  const toggleTodoCompleted = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos]
  );

  const clearCompleted = useCallback(() => {
    setTodos(todos.filter((todo) => !todo.completed));
  }, [todos]);

  const removeTodo = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // Derived state for filtering todos
  const [view, setView] = useState<View>("all");

  const filterActive = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  const filterCompleted = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );

  const views = {
    all: todos,
    active: filterActive,
    completed: filterCompleted,
  };

  return {
    todos,
    view,
    views,
    amount,
    addTodos,
    setTodos,
    setView,
    toggleTodoCompleted,
    removeTodo,
    clearCompleted,
    currentFilterTodos: views[view],
    lastId,
  };
}

export const TodoContext = createContext<TodoContainerType | undefined>(
  undefined
);

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TodoContext.Provider value={TodoContainer()}>
      {children}
    </TodoContext.Provider>
  );
};
