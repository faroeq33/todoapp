import { motion } from "framer-motion";

type ClearButtonProps = {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

function ClearButton({ children, ...props }: ClearButtonProps) {
  return (
    <motion.div whileTap={{ scale: 0.9 }} {...props}>
      {children ? children : "Clear Completed"}
    </motion.div>
  );
}

export default ClearButton;
