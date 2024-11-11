function CardSkeleton() {
  return (
    <div className="flex w-72 flex-col gap-4">
      <div className="dark:bg-darkMint skeleton h-48 w-full animate-pulse bg-paleGreen"></div>
      <div className="dark:bg-darkMint skeleton h-4 w-28 animate-pulse bg-paleGreen"></div>
      <div className="dark:bg-darkMint skeleton h-4 w-full animate-pulse bg-paleGreen"></div>
      <div className="dark:bg-darkMint skeleton h-4 w-full animate-pulse bg-paleGreen"></div>
    </div>
  );
}

export default CardSkeleton;
