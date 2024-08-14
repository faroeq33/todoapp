import { AnimatePresence, motion } from "framer-motion";
import { Check, Circle } from "lucide-react";
import CustomCircle from "./CustomCircle";
import { darkmodeBg, todoBg } from "../features/darkmode/colorStyles";

export type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  id: string;
  onClick?: () => void;
};

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
          children={<CheckedIcon />}
        />
      ) : (
        <UncheckedIcon />
      )}
    </AnimatePresence>
    {/* <CircleCheckBig fill="red" /> */}
    {/* {checked ? <CircleCheckBig /> : <Circle />} */}
  </div>
);

const CheckedIcon = () => {
  return (
    <div className="relative">
      <CustomCircle className="absolute top-0 z-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
      <Check
        className="absolute z-50 w-[18px] h-[18px] top-[3px] text-white left-[3px] "
        strokeWidth={2}
      />
    </div>
  );
};

const UncheckedIcon = () => {
  return (
    <div className="relative">
      <CustomCircle className="absolute top-0 z-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
      <CustomCircle
        className={`absolute top-[0.25rem] left-[0.25rem] z-1 w-5 h-5 ${todoBg} ${darkmodeBg} rounded-full`}
      />
      {/* <Circle /> */}
    </div>
  );
};

export default Checkbox;
