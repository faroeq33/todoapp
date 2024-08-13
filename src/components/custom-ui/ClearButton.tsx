type ClearButtonProps = {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

function ClearButton({ children, ...props }: ClearButtonProps) {
  return <div {...props}>{children ? children : "Clear Completed"}</div>;
}

export default ClearButton;
