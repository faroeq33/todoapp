import { ThemeProvider } from "./ThemeProvider";

type ThemeProviderWrapperProps = {
  children: React.ReactNode;
};

/*
This components is responsible for providing the color and dark mode related things. Define your theme here.
 */
function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default ThemeProviderWrapper;
