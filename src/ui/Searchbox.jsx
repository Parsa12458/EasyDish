import { useRecipes } from "../context/RecipesContext";

function Searchbox() {
  const { dispatch } = useRecipes();
  function handleChange(query) {
    dispatch({ type: "setSearchQuery", payload: query });
  }

  return (
    <form className="flex gap-4 overflow-hidden rounded-default bg-background py-1.5 pl-4 pr-2">
      <img src="/icons/search-icon.svg" alt="Search icon" className="w-4" />
      <input
        type="text"
        placeholder="Search by recipe (min 3 charecter)"
        className="w-64 bg-background font-medium text-oliveGreen placeholder:text-gray focus:outline-none"
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
}

export default Searchbox;
