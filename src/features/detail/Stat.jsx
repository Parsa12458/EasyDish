function Stat({ children, value, unit }) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <h4 className="dark:text-lightGreen font-semibold">{children}</h4>
      <div className="dark:border-primaryDark flex h-28 w-28 flex-col items-center justify-center rounded-full border-[5px] border-primary">
        <span className="dark:text-lightGreen text-3xl font-bold">{value}</span>
        <span className="dark:text-lightGreen text-sm font-regular uppercase">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default Stat;
