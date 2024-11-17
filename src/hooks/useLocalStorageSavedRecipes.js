import { useState, useEffect } from "react";

export function useLocalStorageSavedRecipes(initialRecipe) {
  const [savedRecipes, setRecipes] = useState(() => {
    try {
      const storedRecipes = window.localStorage.getItem("savedRecipes");

      return storedRecipes ? JSON.parse(storedRecipes) : initialRecipe;
    } catch {
      return initialRecipe;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const toggleSavedRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => {
      const recipeExists = prevRecipes.find(
        (recipe) => recipe.id === newRecipe.id,
      );
      return recipeExists
        ? prevRecipes.filter((recipe) => recipe.id !== newRecipe.id)
        : [...prevRecipes, newRecipe];
    });
  };

  return [savedRecipes, toggleSavedRecipe];
}
