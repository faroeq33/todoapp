import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type FilterLinkProps = PropsWithChildren & {
  className?: string;
  onClick: () => void;
};

const FilterLink = ({ children, ...props }: FilterLinkProps) => (
  <motion.div whileTap={{ scale: 0.9 }} {...props}>
    {children}
  </motion.div>
);

export default FilterLink;
