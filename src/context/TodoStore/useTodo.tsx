import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export default useTodo;
