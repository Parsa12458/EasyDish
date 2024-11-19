import SavedRecipesContainer from "../features/user/SavedRecipesContainer";

function SavedRecipesPage() {
  return (
    <div className="mx-auto min-h-screen max-w-[1920px] bg-background pb-32 dark:bg-backgroundDark">
      <h1 className="xs:text-2xl xs:mt-8 mt-12 text-center text-3xl font-bold text-darkGreen dark:text-lightMint">
        Saved Recipes
      </h1>
      <SavedRecipesContainer />
    </div>
  );
}

export default SavedRecipesPage;
