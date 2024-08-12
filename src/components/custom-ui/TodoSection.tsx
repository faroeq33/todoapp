import useTodo from "@/context/TodoStore/useTodo";
import TodoList from "../Todo/TodoList";
import {
  darkmodeBg,
  gap,
  padding,
  roundness,
  todoBg,
} from "../darkmode/colorStyles";
import Filters from "./Filters";

type TodoSectionProps = {
  className: string;
};

function TodoSection(props: TodoSectionProps) {
  const { addTodos, editTodo, clearCompleted, amount, lastId } = useTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit");
    addTodos();
  };

  return (
    <section className={props.className}>
      <form action="" className={`flex flex-col ${gap}`} onSubmit={onSubmit}>
        <input
          type="text"
          className={`w-full ${padding} ${roundness} ${darkmodeBg}`}
          placeholder="Create a new todo..."
          onChange={(e) =>
            editTodo({
              id: lastId.current + 1,
              text: e.target.value,
              completed: false,
            })
          }
        />
        <input type="submit" value="Add" className="hidden" />
        <div className={""}>
          <TodoList
            // takes view from state and passes it to the todos prop
            className={`${todoBg} ${darkmodeBg} rounded-t-lg shadow-2xl`}
          />

          <div
            className={`flex justify-between ${todoBg} ${darkmodeBg} ${padding} dark:text-neutral-dark-very-dark-grayish-blue rounded-b-lg capitalize text-sm`}
          >
            <div className="">{amount} items left</div>
            <div className="" onClick={clearCompleted}>
              clear completed
            </div>
          </div>
        </div>
        <Filters className={todoBg} />
      </form>
    </section>
  );
}

export default TodoSection;
