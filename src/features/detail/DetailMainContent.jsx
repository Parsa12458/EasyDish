function DetailMainContent({ children }) {
  return (
    <div className="mx-auto grid max-w-[1920px] grid-cols-2 items-center gap-16 px-24 pb-32 pt-16">
      {children}
    </div>
  );
}

export default DetailMainContent;
