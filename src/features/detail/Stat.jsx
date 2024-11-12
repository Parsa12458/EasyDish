function Stat({ children, value, unit }) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5">
      <h4 className="font-semibold">{children}</h4>
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border-[5px] border-primary">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-sm font-regular uppercase">{unit}</span>
      </div>
    </div>
  );
}

export default Stat;
