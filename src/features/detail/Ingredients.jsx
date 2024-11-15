function Ingredients({ ingredients }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary">Ingredients</h3>
      <ul className="mt-5 space-y-1 pl-6">
        {ingredients?.map((ingredient, i) => (
          <li className="relative flex items-center" key={i}>
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 transform rounded-full bg-oliveGreen"></span>
            <span className="ml-5 font-medium text-darkGreen">
              {ingredient.original}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
