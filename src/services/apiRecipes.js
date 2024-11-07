export async function getRecipes(page) {
  try {
    const offset = page === 0 ? 0 : (page + 1) * 10;
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=b6caf6feb2104369afd8164623fe780b&addRecipeInformation=true&number=10&offset=${offset}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err.message || err);
  }
}
