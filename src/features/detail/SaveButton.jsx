function SaveButton() {
  return (
    <button className="flex items-center justify-center gap-2 rounded-default bg-oliveGreen px-8 py-2 font-medium text-snow transition-all duration-300 hover:shadow-lg">
      <span className="mt-1">Save</span>
      <img src="/icons/outlined-heart-icon.svg" alt="Heart icon" />
    </button>
  );
}

export default SaveButton;
