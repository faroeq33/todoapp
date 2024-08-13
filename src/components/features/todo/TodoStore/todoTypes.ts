import { TodoContainer } from "./TodoContext";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type View = "all" | "active" | "completed";

export type TodoContainerType = ReturnType<typeof TodoContainer>;
