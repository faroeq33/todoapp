import { View } from "@/components/custom-ui/Filters";
import { Todo } from "@/components/Todo/TodoList";

import { createContext, useState, useRef, FC, ReactNode } from "react";
import { initialTodos } from "./initialTodos";

export const TodoProviderContext = createContext(initialTodos);

function TodoContainer() {
  const lastId = useRef(initialTodos[initialTodos.length - 1].id);
  const [todo, setTodo] = useState<Todo>(initialTodos[0]);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const [view, setView] = useState<View>("all");
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

  const views = {
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
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
    lastId,
  };
}

type TodoContainerType = ReturnType<typeof TodoContainer>;

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
