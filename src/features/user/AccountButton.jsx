import { Link } from "react-router-dom";

function AccountButton() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <img
          src="/icons/user-icon.svg"
          alt="user account icon"
          className="w-12 transition-all duration-300 hover:drop-shadow-md md:w-10"
        />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-50 w-52 rounded-default bg-snow p-2 shadow-md hover:!scale-95 hover:bg-paleGreen sm:w-44 sm:p-1 dark:bg-darkGreen dark:hover:bg-darkMint"
      >
        <li>
          <Link to="/user/savedRecipes">
            <img
              src="/icons/filled-heart-icon-primary.svg"
              alt="heart icon"
              className="sm:scale-90"
            />
            <span className="ml-1 font-semibold text-darkGreen sm:ml-0.5 sm:text-xs dark:text-lightMint">
              Saved Recipes
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AccountButton;
