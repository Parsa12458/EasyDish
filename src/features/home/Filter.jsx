import { useRecipes } from "../../context/RecipesContext";

function Filter({ children, id, optionsArr }) {
  const { dispatch } = useRecipes();
  const actionType = `update${id[0].toUpperCase() + id.slice(1)}`;

  return (
    <div className="flex flex-col items-start gap-1.5">
      <label htmlFor={id} className="text-sm font-bold text-midGreen">
        {children}
      </label>
      <div className="relative">
        <select
          name={id}
          id={id}
          className="w-32 appearance-none rounded-default bg-lightMint py-2.5 pl-4 pr-10 font-medium focus:outline-none focus:ring focus:ring-primary"
          onChange={(e) => {
            dispatch({ type: actionType, payload: e.target.value });
          }}
        >
          {optionsArr.map((option, i) => (
            <option
              value={
                typeof option === "string"
                  ? option.toLowerCase().split(" ").join("-")
                  : option
              }
              key={i}
            >
              {option}
            </option>
          ))}
        </select>
        <div className="text-gray-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <img src="/icons/light-mode-arrow-down-icon.svg" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
