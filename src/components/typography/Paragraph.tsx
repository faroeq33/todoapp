type Props = {
  children: React.ReactNode;
  className?: string;
};

function Paragraph(props: Props) {
  return <p className={props.className}>{props.children}</p>;
}

export default Paragraph;
