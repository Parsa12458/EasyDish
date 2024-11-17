import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getRecipes } from "../../services/apiRecipes";
import Error from "../../ui/Error";
import CardSkeleton from "../../ui/CardSkeleton";
import { useRecipes } from "../../context/RecipesContext";
import { useEffect, useRef } from "react";

function Cards() {
  const {
    page,
    dispatch,
    recipeType,
    recipeCuisine,
    diet,
    sortBy,
    sortDir,
    servings,
    maxReadyTime,
    searchQuery,
  } = useRecipes();

  const abortControllerRef = useRef();

  // Fetch the data
  const { isLoading, data, error } = useQuery({
    queryKey: [
      "recipes",
      page,
      recipeType,
      recipeCuisine,
      diet,
      sortBy,
      sortDir,
      servings,
      maxReadyTime,
      searchQuery.length < 3 ? "" : searchQuery,
    ],
    queryFn: () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      return getRecipes(
        page,
        recipeType,
        recipeCuisine,
        diet,
        sortBy,
        sortDir,
        servings,
        maxReadyTime,
        searchQuery,
        abortControllerRef.current?.signal,
      );
    },
  });

  // Set total pages in context
  useEffect(() => {
    if (!data) return;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.totalResults / itemsPerPage);
    dispatch({ type: "setTotalPages", payload: totalPages });
  }, [data, dispatch]);

  if (error) return <Error />;

  return (
    <div className="mt-12 flex flex-wrap justify-center gap-8 px-16">
      {isLoading
        ? Array.from({ length: 10 }, (_, i) => i).map((i) => (
            <CardSkeleton key={i} />
          ))
        : data?.results?.map((data) => <Card data={data} key={data.id} />)}
      {data?.results?.length === 0 && (
        <Error message="No results were found! 😵‍💫" />
      )}
    </div>
  );
}

export default Cards;
