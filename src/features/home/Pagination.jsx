function Pagination() {
  const activeClass = "bg-primary text-paleGreen";

  return (
    <div className="mt-16 flex items-center justify-center">
      <div className="join">
        <button
          className={`join-item btn border-none hover:bg-midGreen hover:text-snow ${activeClass}`}
        >
          1
        </button>
        <button className="join-item btn border-none bg-paleGreen text-oliveGreen hover:bg-midGreen hover:text-snow">
          2
        </button>
        <button className="join-item btn border-none bg-paleGreen text-oliveGreen hover:bg-midGreen hover:text-snow">
          3
        </button>
        <button className="join-item btn btn-disabled border-none !bg-seafoam !text-oliveGreen">
          ...
        </button>
        <button className="join-item btn border-none bg-paleGreen text-oliveGreen hover:bg-midGreen hover:text-snow">
          522
        </button>
        <button className="join-item btn border-none bg-paleGreen text-oliveGreen hover:bg-midGreen hover:text-snow">
          523
        </button>
      </div>
    </div>
  );
}

export default Pagination;
