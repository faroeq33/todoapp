import { cn } from "@/lib/utils";
import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
} from "../../darkmode/colorStyles";
import useTodo from "@/context/TodoStore/useTodo";
import { View } from "@/context/TodoStore/todoTypes";
import FilterLink from "./FilterLink";

type FiltersProps = {
  className?: string;
};

const myFilters: { view: View }[] = [
  {
    view: "all",
  },
  {
    view: "active",
  },
  {
    view: "completed",
  },
];

function Filters({ ...props }: FiltersProps) {
  const { view, setView } = useTodo();
  return (
    <div
      className={cn(
        `${darkmodeBg} flex justify-center rounded-lg ${gap} ${padding} ${darkmodeText} capitalize`,
        props.className
      )}
    >
      {myFilters.map((filter) => (
        <FilterLink
          onClick={() => setView(filter.view)}
          className={cn(
            "hover:text-neutral-dark-light-grayish-blue-hover",
            view === filter.view && "text-primary-bright-blue"
          )}
        >
          {filter.view}
        </FilterLink>
      ))}
    </div>
  );
}

export default Filters;
