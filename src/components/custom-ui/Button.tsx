import CommonProps from "@/types/common";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: CommonProps & ButtonProps) {
  return (
    <>
      <button
        className="w-full py-2 font-bold text-center text-white rounded-lg bg-primary-dark-cyan"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
