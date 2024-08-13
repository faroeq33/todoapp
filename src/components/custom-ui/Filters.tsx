import { cn } from "@/lib/utils";
import {
  darkmodeBg,
  darkmodeText,
  gap,
  padding,
} from "../darkmode/colorStyles";
import useTodo from "@/context/TodoStore/useTodo";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

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
      <FilterLink
        onClick={() => setView("all")}
        className={
          view === "all"
            ? `text-primary-bright-blue ${hoverState}`
            : `${hoverState}`
        }
      >
        All
      </FilterLink>
      <FilterLink
        onClick={() => setView("active")}
        className={
          view === "active"
            ? `text-primary-bright-blue ${hoverState}`
            : `${hoverState}`
        }
      >
        Active
      </FilterLink>
      <FilterLink
        onClick={() => setView("completed")}
        className={
          view === "completed"
            ? `text-primary-bright-blue ${hoverState}`
            : `${hoverState}`
        }
      >
        completed
      </FilterLink>
    </div>
  );
}

type FilterLinkProps = PropsWithChildren & {
  className?: string;
  onClick: () => void;
};

const FilterLink = ({ children, ...props }: FilterLinkProps) => (
  <motion.div whileTap={{ scale: 0.8 }} {...props}>
    {children}
  </motion.div>
);

export default Filters;
