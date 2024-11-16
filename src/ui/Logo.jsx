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
        className="w-44"
      />
    </Link>
  );
}

export default Logo;
