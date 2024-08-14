import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
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
      <CustomCircle className="absolute top-0 z-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
      <Check
        className="absolute z-50 w-[18px] h-[18px] top-[3px] text-white left-[3px] "
        strokeWidth={2}
      />
    </div>
  );
};

const UncheckedIcon = () => {
  const squareSize = "24px";
  const secondSquareSize = "20px";

  return (
    <div className="relative">
      <CustomCircle
        className="absolute top-0 z-0 rounded-full bg-gradient-to-br from-cyan-400 to-purple-800"
        style={{
          width: squareSize,
          height: squareSize,
        }}
      />
      <CustomCircle
        className={`absolute top-[2px] left-[2px] z-1 w-[20px] h-[w-[20px] rounded-full ${todoBg} ${darkmodeBg} `}
        style={{
          width: secondSquareSize,
          height: secondSquareSize,
        }}
      />
      {/* <Circle /> */}
    </div>
  );
};

export default Checkbox;
