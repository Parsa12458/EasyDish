function Filter({
  children,
  id,
  optionsArr,
  type = "dropdown",
  defaultValue = 1,
}) {
  if (type === "dropdown")
    return (
      <div className="flex flex-col items-start gap-1.5">
        <label htmlFor={id} className="text-sm font-bold text-midGreen">
          {children}
        </label>
        <div className="relative">
          <select
            name={id}
            id={id}
            className="w-32 appearance-none rounded-default bg-lightMint py-2.5 pl-4 pr-10 font-medium focus:outline-none focus:ring focus:ring-primary"
          >
            {optionsArr.map((option, i) => (
              <option value={option.toLowerCase().split(" ").join("-")} key={i}>
                {option}
              </option>
            ))}
          </select>
          <div className="text-gray-700 pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
            <img src="/icons/light-mode-arrow-down-icon.svg" />
          </div>
        </div>
      </div>
    );

  if (type === "number")
    return (
      <div className="flex flex-col items-start gap-1.5">
        <label
          htmlFor={id}
          className="max-w-24 text-sm font-bold text-midGreen"
        >
          {children}
        </label>

        <input
          type="number"
          name={id}
          id={id}
          className="w-24 rounded-default bg-lightMint py-2.5 pl-4 pr-4 font-medium focus:outline-none focus:ring focus:ring-primary"
          defaultValue={defaultValue}
        />
      </div>
    );
}

export default Filter;
