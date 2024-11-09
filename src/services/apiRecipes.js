const RESULTS_PER_PAGE = 10;

export async function getRecipes(
  page,
  recipeType,
  recipeCuisine,
  diet,
  sortBy,
  sortDir,
  servings,
  maxReadyTime,
  signal,
) {
  try {
    const offset = page * RESULTS_PER_PAGE;
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b6caf6feb2104369afd8164623fe780b&addRecipeInformation=true&number=10&offset=${offset}${recipeType === "all" ? "" : `&type=${recipeType}`}${recipeCuisine === "all" ? "" : `&cuisine=${recipeCuisine}`}${diet === "all" ? "" : `&diet=${diet}`}${sortBy === "none" ? "" : `&sort=${sortBy}`}${sortDir === "ascending" ? "&sortDirection=asc" : "&sortDirection=desc"}${servings === "all" ? "" : `&minServings=${servings}&maxServings=${servings}`}${maxReadyTime === "all" ? "" : `&maxReadyTime=${maxReadyTime}`}`,
      { signal },
    );

    if (!res.ok) throw new Error("Something went wrong with fetching recipes!");
    const data = await res.json();
    return data;
  } catch (err) {
    if (err.name === "AbortError") return;
    console.log(err);
    throw new Error(err.message || err);
  }
}
