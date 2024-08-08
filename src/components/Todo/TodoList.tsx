type TodoListProps = {
  todos: Todo[];
  toggleTodoCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
};

function TodoList(props: TodoListProps) {
  return (
    <>
      {props.todos.map((todo) => (
        <div className="flex items-baseline gap-4 todo-row" key={todo.id}>
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => props.toggleTodoCompleted(todo.id)}
          />
          <li className={todo.completed ? "line-through" : ""}>{todo.text}</li>
          <button onClick={() => props.removeTodo(todo.id)}>X</button>
        </div>
      ))}
    </>
  );
}

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export default TodoList;
