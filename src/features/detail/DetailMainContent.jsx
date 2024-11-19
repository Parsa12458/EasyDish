function DetailMainContent({ children }) {
  return (
    <div className="xs:px-6 xs:items-start mx-auto grid max-w-[1920px] grid-cols-2 items-center gap-16 px-24 pb-32 pt-16 sm:gap-12 sm:px-12 sm:pt-12 md:flex md:flex-col">
      {children}
    </div>
  );
}

export default DetailMainContent;
