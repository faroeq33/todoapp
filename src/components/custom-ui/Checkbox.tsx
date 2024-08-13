import { AnimatePresence, motion } from "framer-motion";
import { Circle, CircleCheckBig } from "lucide-react";

export type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  id: string;
  onClick?: () => void;
};

// enters: { opacity: 0, scale: 0.5 },
const Checkbox = ({ checked, ...props }: CheckboxProps) => (
  <div
    className="w-4 h-4 mt-1 appearance-none cursor-pointer peer shrink-0"
    {...props}
  >
    <AnimatePresence>
      {checked ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileTap={{ scaleX: 0.9 }}
          children={<CircleCheckBig />}
        />
      ) : (
        <Circle />
      )}
    </AnimatePresence>
    {/* {checked ? <CircleCheckBig /> : <Circle />} */}
  </div>
);

export default Checkbox;
