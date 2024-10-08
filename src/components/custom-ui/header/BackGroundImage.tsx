import useTheme from "@/components/features/darkmode/theme-context/useTheme";

function BackGroundImage() {
  const { theme } = useTheme();

  const getThemeImage = () => {
    if (theme === "light") {
      return "/images/bg-desktop-light.jpg";
    }
    return "/images/bg-desktop-dark.jpg";
  };

  return (
    <img
      src={getThemeImage()}
      alt="Chanel Perfume"
      className="object-cover w-full"
      style={{ maxHeight: "30vh" }}
    />
  );
}

export default BackGroundImage;
