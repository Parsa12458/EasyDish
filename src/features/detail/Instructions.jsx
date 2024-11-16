function Instructions({ instructions }) {
  return (
    <div>
      <h3 className="dark:text-primaryDark text-3xl font-semibold text-primary">
        Instructions
      </h3>
      <ol className="mt-5 list-decimal space-y-1 pl-6">
        {instructions?.map((step) => (
          <li
            className="dark:text-lightGreen ml-5 font-medium text-darkGreen"
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
