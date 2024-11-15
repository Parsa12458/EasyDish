function OutlineButton({ children, iconSrc, iconAlt }) {
  return (
    <button className="flex h-[44px] items-center justify-center gap-2 rounded-default border-[3px] border-primary px-8 font-medium text-primary transition-all duration-300 hover:shadow-lg">
      <span>{children}</span>
      <img src={iconSrc} alt={iconAlt} />
    </button>
  );
}

export default OutlineButton;
