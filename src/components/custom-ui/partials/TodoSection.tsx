import useTodo from "@/components/features/todo/todostore/useTodo";

import Filters from "../filters/Filters";
import ClearButton from "../buttons/ClearButton";
import {
  darkmodeBg,
  gap,
  padding,
  todoBg,
} from "../../features/darkmode/colorStyles";
import TodoList from "../../features/todo/TodoList";
import AddTodoField from "@/components/features/todo/AddTodoField";

type TodoSectionProps = {
  className: string;
};

function TodoSection(props: TodoSectionProps) {
  const { clearCompleted, amount } = useTodo();

  return (
    <section className={props.className}>
      <div className={`flex flex-col ${gap}`}>
        <AddTodoField />

        <div>
          <TodoList />

          <div
            className={`flex justify-between ${todoBg} ${darkmodeBg} ${padding} text-neutral-dark-very-dark-grayish-blue rounded-b-lg capitalize text-sm`}
          >
            <div>{amount} items left</div>
            <ClearButton className="" onClick={clearCompleted}>
              clear completed
            </ClearButton>
          </div>
        </div>
        <Filters className={todoBg} />
      </div>
    </section>
  );
}

export default TodoSection;
