import { useRecipes } from "../../context/RecipesContext";
import { scrollToTop } from "../../helpers/helper";

function Pagination() {
  const { page, totalPages, dispatch } = useRecipes();
  const isFirstPage = page === 0;
  const isLastPage = page >= totalPages - 1;

  function handlePrevious() {
    dispatch({ type: "previousPage" });
    scrollToTop();
  }

  function handleNext() {
    dispatch({ type: "nextPage" });
    scrollToTop();
  }

  // TODO: if possible prevent titles of cards to have like 4 lines

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-4">
      <div className="join">
        <button
          className={`btn join-item border-none bg-paleGreen text-oliveGreen hover:bg-gray/50 ${isFirstPage ? "btn-disabled" : ""} dark:bg-oliveGreen dark:text-paleGreen dark:hover:bg-forestGreen`}
          onClick={handlePrevious}
        >
          «
        </button>
        <button className="btn btn-disabled join-item border-none !bg-seafoam/75 !text-darkGreen dark:!bg-darkMint dark:!text-seafoam">
          Page {page + 1}
        </button>
        <button
          className={`btn join-item border-none bg-paleGreen text-oliveGreen hover:bg-gray/50 ${isLastPage ? "btn-disabled" : ""} dark:bg-oliveGreen dark:text-paleGreen dark:hover:bg-forestGreen`}
          onClick={handleNext}
        >
          »
        </button>
      </div>
      <span className="text-sm dark:text-paleGreen">
        Total Pages: <span className="font-semibold">{totalPages}</span> Page
      </span>
    </div>
  );
}

export default Pagination;
