import { useRecipes } from "../../context/RecipesContext";
import { scrollToTop } from "../../helpers/helper";

function Pagination() {
  const { page, totalPages, dispatch } = useRecipes();
  const isFirstPage = page === 0;
  const isLastPage = page === totalPages;

  function handlePrevious() {
    dispatch({ type: "previousPage" });
    scrollToTop();
  }

  function handleNext() {
    dispatch({ type: "nextPage" });
    scrollToTop();
  }

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-4">
      <div className="join">
        <button
          className={`btn join-item border-none bg-paleGreen text-oliveGreen hover:bg-gray/50 ${isFirstPage ? "btn-disabled" : ""} `}
          onClick={handlePrevious}
        >
          «
        </button>
        <button className="btn btn-disabled join-item border-none !bg-seafoam/75 !text-darkGreen">
          Page {page + 1}
        </button>
        <button
          className={`btn join-item border-none bg-paleGreen text-oliveGreen hover:bg-gray/50 ${isLastPage ? "btn-disabled" : ""}`}
          onClick={handleNext}
        >
          »
        </button>
      </div>
      <span className="text-sm">
        Total Pages: <span className="font-semibold">{totalPages + 1}</span>{" "}
        Page
      </span>
    </div>
  );
}

export default Pagination;
