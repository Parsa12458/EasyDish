import { useLocalStorageSavedRecipes } from "../../hooks/useLocalStorageSavedRecipes";
import Error from "../../ui/Error";
import Card from "../home/Card";

function SavedRecipesContainer() {
  const [savedRecipes] = useLocalStorageSavedRecipes();

  return (
    <div className="mt-12 flex flex-wrap justify-center gap-8 px-16">
      {savedRecipes?.map((data) => (
        <Card data={data} key={data.id} />
      ))}
      {(savedRecipes?.length === 0 || !savedRecipes) && (
        <Error message="No saved recipes were found! 🥱" />
      )}
    </div>
  );
}

export default SavedRecipesContainer;
