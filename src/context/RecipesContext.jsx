import { createContext, useContext, useReducer } from "react";

const RecipesContext = createContext();

const initialState = {
  // Pagination
  totalPages: 0,
  page: 0,
  // Filters
  recipeType: "all",
  recipeCuisine: "all",
  diet: "all",
  sortBy: "none",
  sortDir: "ascending",
  servings: "all",
  maxReadyTime: "all",
};

function reducer(state, action) {
  switch (action.type) {
    // Pagination
    case "nextPage":
      return { ...state, page: state.page + 1 };
    case "previousPage":
      return { ...state, page: state.page - 1 };
    case "setTotalPages":
      return { ...state, totalPages: action.payload };
    // Filters
    case "updateRecipeType":
      return { ...state, recipeType: action.payload, page: 0 };
    case "updateRecipeCuisine":
      return { ...state, recipeCuisine: action.payload, page: 0 };
    case "updateDiet":
      return { ...state, diet: action.payload, page: 0 };
    case "updateSortBy":
      return { ...state, sortBy: action.payload, page: 0 };
    case "updateSortDir":
      return { ...state, sortDir: action.payload, page: 0 };
    case "updateServings":
      return { ...state, servings: action.payload, page: 0 };
    case "updateMaxReadyTime":
      return { ...state, maxReadyTime: action.payload, page: 0 };
  }
}

function RecipesProvider({ children }) {
  const [
    {
      page,
      totalPages,
      recipeType,
      recipeCuisine,
      diet,
      sortBy,
      sortDir,
      servings,
      maxReadyTime,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <RecipesContext.Provider
      value={{
        dispatch,
        page,
        totalPages,
        recipeType,
        recipeCuisine,
        diet,
        sortBy,
        sortDir,
        servings,
        maxReadyTime,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
}

function useRecipes() {
  const context = useContext(RecipesContext);
  if (context === undefined)
    throw new Error("RecipeContext was used outside of the RecipeProvider");
  return context;
}

export { RecipesProvider, useRecipes };
