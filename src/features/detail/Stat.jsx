function Stat({ children, value, unit }) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <h4 className="text-center font-semibold sm:text-sm dark:text-lightGreen">
        {children}
      </h4>
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-[5px] border-primary sm:h-24 sm:w-24 sm:border-[4px] dark:border-primaryDark">
        <span className="text-3xl font-bold sm:text-2xl dark:text-lightGreen">
          {value}
        </span>
        <span className="text-sm font-regular uppercase sm:text-xs dark:text-lightGreen">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default Stat;
