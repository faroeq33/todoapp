import useTodo from "@/components/features/todo/todostore/useTodo";

import Filters from "../filters/Filters";
import ClearButton from "../buttons/ClearButton";
import {
  darkmodeBg,
  gap,
  padding,
  roundness,
  todoBg,
} from "../../features/darkmode/colorStyles";
import TodoList from "../../features/todo/TodoList";

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
          className={`w-full ${padding} ${roundness} ${darkmodeBg} dark:text-primary-check-background`}
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
            className={`flex justify-between ${todoBg} ${darkmodeBg} ${padding} text-neutral-dark-very-dark-grayish-blue rounded-b-lg capitalize text-sm`}
          >
            <div className="">{amount} items left</div>
            <ClearButton className="" onClick={clearCompleted}>
              clear completed
            </ClearButton>
          </div>
        </div>
        <Filters className={todoBg} />
      </form>
    </section>
  );
}

export default TodoSection;
