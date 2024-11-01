function Searchbox() {
  return (
    <form className="flex gap-4 overflow-hidden rounded-default bg-background py-1.5 pl-4 pr-2">
      <img src="/icons/search-icon.svg" alt="Search icon" className="w-4" />
      <input
        type="text"
        placeholder="Search by recipe or ingredient"
        className="w-72 bg-background font-medium text-oliveGreen placeholder:text-gray focus:outline-none"
      />
    </form>
  );
}

export default Searchbox;
