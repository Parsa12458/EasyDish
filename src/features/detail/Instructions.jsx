function Instructions({ instructions }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary sm:text-2xl dark:text-primaryDark">
        Instructions
      </h3>
      <ol className="xs:pl-2 mt-5 list-decimal space-y-1 pl-6 sm:mt-3">
        {instructions?.map((step) => (
          <li
            className="ml-5 font-medium text-darkGreen sm:text-sm dark:text-lightGreen"
            key={step.number}
          >
            <span className="ml-1">{step.step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Instructions;
