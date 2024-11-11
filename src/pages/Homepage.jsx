import Cards from "../features/home/Cards";
import Filters from "../features/home/Filters";
import Pagination from "../features/home/Pagination";

function Homepage() {
  return (
    <main className="mx-auto max-w-[1920px] bg-background pb-32 dark:bg-backgroundDark">
      <Filters />
      <Cards />
      <Pagination />
    </main>
  );
}

export default Homepage;
