import { createContext, useState, useRef, FC, ReactNode, useMemo } from "react";
import { initialTodos } from "./initialTodos";
import { Todo, TodoContainerType, View } from "./todoTypes";

export const TodoProviderContext = createContext(initialTodos);

export function TodoContainer() {
  const lastId = useRef(initialTodos[initialTodos.length - 1].id);
  const [todo, setTodo] = useState<Todo>(initialTodos[0]);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const amount = todos.filter((todo) => !todo.completed).length;

  const addTodos = () => {
    if (todo.id !== lastId.current) {
      setTodos([...todos, todo]);
      lastId.current++;
    }
  };

  const editTodo = (todo: Todo) => {
    setTodo(todo);
  };

  const toggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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
    setTodos,
    setView,
    addTodos,
    editTodo,
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
