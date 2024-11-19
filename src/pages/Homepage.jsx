import { useDarkMode } from "../context/DarkModeContext";
import Cards from "../features/home/Cards";
import Filters from "../features/home/Filters";
import Pagination from "../features/home/Pagination";
import Modal from "../ui/Modal";
import Searchbox from "../ui/Searchbox";

function Homepage() {
  const { isDarkMode } = useDarkMode();

  return (
    <main className="mx-auto max-w-[1920px] bg-background pb-32 dark:bg-backgroundDark">
      <div className="sm:hidden">
        <Filters />
      </div>
      <div className="mt-10 hidden items-center justify-center gap-6 sm:flex">
        <Searchbox type="border" />
        <button onClick={() => document.getElementById("filters").showModal()}>
          <img
            src={
              isDarkMode
                ? "/icons/dark-filter-icon.svg"
                : "/icons/light-filter-icon.svg"
            }
            alt="filters icon"
          />
        </button>
        <Modal content={<Filters />} id="filters" />
      </div>
      <Cards />
      <Pagination />
    </main>
  );
}

export default Homepage;
