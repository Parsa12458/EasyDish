export async function getRecipes() {
  try {
    const res = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=b6caf6feb2104369afd8164623fe780b&number=10&addRecipeInformation=true",
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err.message || err);
  }
}
