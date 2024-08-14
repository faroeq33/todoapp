/*
  Div Component
This could be used as boilerplate for creating new components.
*/
import { cn } from "@/lib/utils";
import CommonProps from "@/types/common";

type Props = {
  // children: React.ReactNode;
};

function CustomCircle({ children, ...props }: CommonProps<Props>) {
  return (
    <div {...props} className={cn("", props.className)}>
      {children}
    </div>
  );
}

export default CustomCircle;
