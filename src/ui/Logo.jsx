import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <Link to="/home">
      <img
        src={
          isDarkMode
            ? "/icons/dark-mode-logo.svg"
            : "/icons/light-mode-logo.svg"
        }
        alt="Easy Dish Logo"
        className="xs:w-32 w-44 md:w-40"
      />
    </Link>
  );
}

export default Logo;
