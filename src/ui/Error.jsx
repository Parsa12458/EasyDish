function Error({ message = "There was an error loading recipes! ⭕" }) {
  return (
    <div className="mt-[-80px] flex h-screen items-center justify-center p-20 text-center text-2xl dark:text-background">
      <span>{message}</span>
    </div>
  );
}

export default Error;
