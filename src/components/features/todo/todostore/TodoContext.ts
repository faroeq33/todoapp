import { create } from "zustand";
import { initialTodos } from "./initialTodos";
import { Todo, View } from "./todoTypes";
import createSelectors from "./createSelector";

type TodoStore = {
  todos: Todo[];
  addTodos: (todo: Todo) => void;
  setTodos: () => void;
  toggleTodoCompleted: (id: number) => void;
  clearCompleted: () => void;
  removeTodo: (id: number) => void;
  view: View;
  setView: (view: View) => void;
  currentFilterTodos: Todo[];
  lastId: { current: number };
};

const useTodoStoreBase = create<TodoStore>((set) => ({
  todos: initialTodos,
  addTodos: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
      lastId: { current: state.lastId.current + 1 },
    }));
  },
  setTodos: () => set,
  toggleTodoCompleted: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  clearCompleted: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
      amount: state.todos.filter((todo) => !todo.completed).length,
    }));
  },
  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
      amount: state.todos.filter((todo) => !todo.completed).length,
    }));
  },
  view: "all",
  setView: (view) => {
    set({ view });
  },
  currentFilterTodos: initialTodos,
  lastId: { current: initialTodos[initialTodos.length - 1].id },
}));

export const useTodoStore = createSelectors(useTodoStoreBase);
