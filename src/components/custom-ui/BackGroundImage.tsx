import useTheme from "../darkmode/useTheme";

function BackGroundImage() {
  const { theme } = useTheme();

  const getThemeImage = () => {
    if (theme === "light") {
      return "src/assets/images/bg-mobile-light.jpg";
    }
    return "src/assets/images/bg-mobile-dark.jpg";
  };

  return <img src={getThemeImage()} alt="Chanel Perfume" className="w-full" />;
}

export default BackGroundImage;
