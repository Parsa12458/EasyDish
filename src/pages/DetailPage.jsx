import DetailMainContent from "../features/detail/DetailMainContent";
import ImageDetail from "../features/detail/ImageDetail";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/apiRecipes";
import Error from "../ui/Error";
import OutlineButton from "../ui/OutlineButton";
import Ingredients from "../features/detail/Ingredients";
import Instructions from "../features/detail/Instructions";
import SaveButton from "../features/detail/SaveButton";
import Stats from "../features/detail/Stats";
import Tastes from "../features/detail/Tastes";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";

function DetailPage() {
  const { recipeId } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["recipe", recipeId],
    queryFn: () => getRecipe(recipeId),
  });
  const {
    title,
    image: imageSrc,
    extendedIngredients: ingredients,
    cookingMinutes,
    preparationMinutes,
    readyInMinutes,
    servings,
    healthScore,
    analyzedInstructions: instructions,
    taste,
    nutrition,
  } = data || {};

  useEffect(
    () =>
      scrollTo({
        behavior: "smooth",
        top: 0,
      }),
    [],
  );

  if (error) return <Error message="There was an error loading recipe! ⭕" />;

  if (isLoading) return <Spinner />;
  return (
    <div>
      <ImageDetail title={title} imageSrc={imageSrc} />

      <DetailMainContent>
        <Ingredients ingredients={ingredients} />
        <Stats
          cookingMinutes={cookingMinutes}
          preparationMinutes={preparationMinutes}
          readyInMinutes={readyInMinutes}
          servings={servings}
          healthScore={healthScore?.toFixed(1)}
          calories={nutrition?.nutrients?.[0].amount?.toFixed(1)}
          caloriesUnit={nutrition?.nutrients?.[0].unit}
        />
        <Instructions instructions={instructions?.[0].steps} />
        <Tastes tastes={taste} />

        <div className="col-span-2 mx-auto ml-8 flex items-center justify-start gap-4">
          <SaveButton
            data={{
              title,
              image: imageSrc,
              extendedIngredients: ingredients,
              cookingMinutes,
              preparationMinutes,
              readyInMinutes,
              servings,
              healthScore,
              analyzedInstructions: instructions,
              taste,
              nutrition,
              id: recipeId,
            }}
          />
          <OutlineButton
            iconSrc="/icons/usentils-icon.svg"
            iconAlt="usentils icon"
          >
            See Similar Recipes
          </OutlineButton>
          <OutlineButton iconSrc="/icons/info-icon.svg" iconAlt="info icon">
            See Nutrition Facts
          </OutlineButton>
        </div>
      </DetailMainContent>
    </div>
  );
}

export default DetailPage;
