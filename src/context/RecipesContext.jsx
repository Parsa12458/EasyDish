import { createContext, useContext, useReducer } from "react";

const RecipesContext = createContext();

const initialState = {
  totalPages: 0,
  page: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "nextPage":
      return { ...state, page: state.page + 1 };
    case "previousPage":
      return { ...state, page: state.page - 1 };
    case "setTotalPages":
      return { ...state, totalPages: action.payload };
  }
}

function RecipesProvider({ children }) {
  const [{ page, totalPages }, dispatch] = useReducer(reducer, initialState);
  return (
    <RecipesContext.Provider value={{ dispatch, page, totalPages }}>
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
