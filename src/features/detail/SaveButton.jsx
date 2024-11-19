import { useLocalStorageSavedRecipes } from "../../hooks/useLocalStorageSavedRecipes";

function SaveButton({ data }) {
  const [savedRecipes, toggleSavedRecipes] = useLocalStorageSavedRecipes([]);

  const isRecipeSaved = savedRecipes.some((recipe) => recipe.id === data.id);

  return (
    <button
      className="flex h-[44px] items-center justify-center gap-2 rounded-default bg-oliveGreen px-8 font-medium text-snow transition-all duration-300 hover:shadow-lg sm:h-[40px] sm:px-7 sm:text-sm dark:hover:bg-forestGreen"
      onClick={() => toggleSavedRecipes(data)}
    >
      <span>Save</span>
      <img
        src={
          !isRecipeSaved
            ? "/icons/outlined-heart-icon.svg"
            : "/icons/filled-heart-icon.svg"
        }
        alt="Heart icon"
        className="mb-1 sm:scale-90"
      />
    </button>
  );
}

export default SaveButton;
