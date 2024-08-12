import { cn } from "@/lib/utils";
import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
} from "../darkmode/colorStyles";
import useTodo from "@/context/TodoStore/useTodo";

export type View = "all" | "active" | "completed";

type FiltersProps = {
  className?: string;
};

const hoverState = "hover:text-neutral-dark-light-grayish-blue-hover";

function Filters({ ...props }: FiltersProps) {
  const { view, setView } = useTodo();
  return (
    <div
      className={cn(
        `${darkmodeBg} flex justify-center rounded-lg ${gap} ${padding} ${darkmodeText} capitalize`,
        props.className
      )}
    >
      <a
        onClick={() => setView("all")}
        className={
          view === "all"
            ? `text-primary-bright-blue ${hoverState}`
            : `${hoverState}`
        }
      >
        All
      </a>
      <div
        onClick={() => setView("active")}
        className={
          view === "active"
            ? `text-primary-bright-blue ${hoverState}`
            : `${hoverState}`
        }
      >
        Active
      </div>
      <div
        onClick={() => setView("completed")}
        className={
          view === "completed"
            ? `text-primary-bright-blue ${hoverState}`
            : `${hoverState}`
        }
      >
        completed
      </div>
    </div>
  );
}

export default Filters;
