import { useContext } from "react";
import { Button } from "react-bootstrap";

import { ThemeContext } from "../../services/theme/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} className="w-auto m-2">
      Cambiar tema {theme === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

export default ToggleTheme;
