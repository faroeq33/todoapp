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
import { useTodoStore } from "@/components/features/todo/todostore/TodoContext";

type TodoSectionProps = {
  className: string;
};

function TodoSection(props: TodoSectionProps) {
  const { clearCompleted, todos } = useTodoStore();
  const amount: number = todos.filter((todo) => !todo.completed).length;

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
