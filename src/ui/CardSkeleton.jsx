function CardSkeleton() {
  return (
    <div className="flex w-72 flex-col gap-4">
      <div className="skeleton h-48 w-full bg-paleGreen"></div>
      <div className="skeleton h-4 w-28 bg-paleGreen"></div>
      <div className="skeleton h-4 w-full bg-paleGreen"></div>
      <div className="skeleton h-4 w-full bg-paleGreen"></div>
    </div>
  );
}

export default CardSkeleton;
