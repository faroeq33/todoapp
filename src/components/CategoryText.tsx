import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

function CategoryText({ children }: Props) {
  return (
    <p
      className={cn(
        "m-0 text-xs tracking-widest text-left uppercase  text-neutral-dark-grayish-blue dark:text-primary-cream",
        "pt-4 lg:pt-0"
      )}
      style={{
        fontWeight: "500",
        fontSizeAdjust: "12px",
        letterSpacing: "5px",
      }}
    >
      {children}
    </p>
  );
}

export default CategoryText;
