type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
function Button(props: ButtonProps) {
  return (
    <>
      <button
        className="bg-primary-dark-cyan rounded-lg text-center w-full py-2 text-white font-bold"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button;
