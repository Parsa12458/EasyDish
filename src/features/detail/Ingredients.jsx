function Ingredients({ ingredients }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary sm:text-2xl dark:text-primaryDark">
        Ingredients
      </h3>
      <ul className="xs:pl-2 mt-5 space-y-1 pl-6 sm:mt-3">
        {ingredients?.map((ingredient, i) => (
          <li className="relative flex items-center" key={i}>
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 transform rounded-full bg-oliveGreen sm:h-1.5 sm:w-1.5"></span>
            <span className="ml-5 font-medium text-darkGreen sm:text-sm dark:text-lightGreen">
              {ingredient.original}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
