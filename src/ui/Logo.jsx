import { useDarkMode } from "../context/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <button>
      <img
        src={
          isDarkMode
            ? "/icons/dark-mode-logo.svg"
            : "/icons/light-mode-logo.svg"
        }
        alt="Easy Dish Logo"
        className="w-44"
      />
    </button>
  );
}

export default Logo;
