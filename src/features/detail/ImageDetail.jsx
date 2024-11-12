function ImageDetail() {
  return (
    <div className="relative bg-background">
      <img
        src="https://img.spoonacular.com/recipes/632426-312x231.jpg"
        alt="Anticuchos Of White Seabass With Aji Chile Honey Marinade & Semilla Salsa"
        className="h-60 w-screen object-cover brightness-[.35]"
      />
      <div className="absolute left-0 top-0 z-10 h-56 w-screen backdrop-blur-[6px]">
        &nbsp;
      </div>
      <h1 className="absolute left-1/2 top-1/2 z-20 w-8/12 translate-x-[-50%] translate-y-[-50%] text-center text-4xl font-bold text-snow">
        Anticuchos Of White Seabass With Aji Chile Honey Marinade & Semilla
        Salsa
      </h1>
    </div>
  );
}

export default ImageDetail;
