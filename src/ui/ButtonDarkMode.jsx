import { useDarkMode } from "../context/DarkModeContext";

function ButtonDarkMode() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <button
      className="flex items-center justify-center gap-2 rounded-default bg-oliveGreen px-4 py-1.5 font-medium text-snow transition-all duration-300 hover:bg-forestGreen hover:drop-shadow-md"
      onClick={toggleDarkMode}
    >
      <img
        src={isDarkMode ? "/icons/sun-icon.svg" : "/icons/moon-icon.svg"}
        alt="Dark mode icon"
      />
      <span className="mt-1 text-sm">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}

export default ButtonDarkMode;
