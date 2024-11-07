import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getRecipes } from "../../services/apiRecipes";
import Error from "../../ui/Error";
import CardSkeleton from "../../ui/CardSkeleton";
import { useRecipes } from "../../context/RecipesContext";
import { useEffect } from "react";

function Cards() {
  const { page, dispatch } = useRecipes();
  // Fetch the data
  const { isLoading, data, error } = useQuery({
    queryKey: ["recipes", page],
    queryFn: () => getRecipes(page),
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
        : data?.results?.map((data) => (
            <Card data={data} isLoading={isLoading} key={data.id} />
          ))}
    </div>
  );
}

export default Cards;
