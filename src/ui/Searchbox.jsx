import { useRecipes } from "../context/RecipesContext";

function Searchbox({ type }) {
  const { dispatch } = useRecipes();
  function handleChange(query) {
    dispatch({ type: "setSearchQuery", payload: query });
  }

  return (
    <form
      className={`flex gap-4 overflow-hidden rounded-default bg-background py-1.5 pl-4 pr-2 md:gap-2.5 md:pl-3.5 md:pr-3 dark:bg-backgroundDark ${type === "border" ? "border-2 border-primary" : ""}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <img src="/icons/search-icon.svg" alt="Search icon" className="w-4" />
      <input
        type="text"
        placeholder="Search by recipe (min 3 charecter)"
        className="w-64 bg-background font-medium text-oliveGreen placeholder:text-gray focus:outline-none md:w-52 md:text-sm dark:bg-backgroundDark dark:text-background"
        onChange={(e) => handleChange(e.target.value)}
      />
    </form>
  );
}

export default Searchbox;
