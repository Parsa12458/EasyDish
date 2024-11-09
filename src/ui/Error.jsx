function Error({ message = "There was an error loading recipes! ⭕" }) {
  return (
    <div className="flex items-center justify-center p-20 text-2xl">
      <span>{message}</span>
    </div>
  );
}

export default Error;
