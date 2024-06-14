import { useContext } from "react";
import { Button } from "react-bootstrap";

import { ThemeContext } from "../../services/theme/theme.context";
import useTranslation from "../../custom/useTranslation";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const translate = useTranslation();
  return (
    <Button onClick={toggleTheme} className="w-auto m-2">
      {theme === "light" ? translate("dark_theme_change") : translate("light_theme_change")}
    </Button>
  );
};

export default ToggleTheme;
