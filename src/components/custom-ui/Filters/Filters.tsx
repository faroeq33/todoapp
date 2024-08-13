import { cn } from "@/lib/utils";

import useTodo from "@/components/features/todo/TodoStore/useTodo";
import { View } from "@/components/features/todo/TodoStore/todoTypes";
import FilterLink from "./FilterLink";
import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
} from "@/components/features/darkmode/colorStyles";

type FiltersProps = {
  className?: string;
};

const myFilters: {
  id: number;
  view: View;
}[] = [
  {
    id: 1,
    view: "all",
  },
  {
    id: 2,
    view: "active",
  },
  {
    id: 3,
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
          key={filter.id}
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
