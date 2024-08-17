import { cn } from "@/lib/utils";

import { View } from "@/components/features/todo/todostore/todoTypes";
import FilterLink from "./FilterLink";
import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
} from "@/components/features/darkmode/colorStyles";
import { memo } from "react";
import { useTodoStore } from "@/components/features/todo/todostore/TodoContext";

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
  const { view, setView } = useTodoStore();

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

export default memo(Filters);
