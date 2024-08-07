type Props = {
  children: React.ReactNode;
  className?: string;
};

function Heading2(props: Props) {
  return <h2 className="text-3xl font-bold">{props.children}</h2>;
}

export default Heading2;
