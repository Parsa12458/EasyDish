import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getRecipes } from "../../services/apiRecipes";
import Error from "../../ui/Error";
import CardSkeleton from "../../ui/CardSkeleton";

function Cards() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: getRecipes,
  });

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
