import { useState } from "react";

function ImageDetail({ title, imageSrc }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative bg-background">
      {imageError ? (
        <div className="h-60 w-screen bg-darkMint object-cover sm:h-52"></div>
      ) : (
        <img
          src={imageSrc}
          alt={title}
          className="z-20 h-60 w-screen object-cover brightness-[.35] sm:h-52"
          onError={() => {
            setImageError(true);
          }}
        />
      )}
      <div className="absolute left-0 top-0 z-10 h-60 w-screen backdrop-blur-[6px] sm:h-52">
        &nbsp;
      </div>
      <h1 className="xs:text-2xl absolute left-1/2 top-1/2 z-20 w-8/12 translate-x-[-50%] translate-y-[-50%] text-center text-4xl font-bold text-snow sm:text-3xl">
        {title}
      </h1>
    </div>
  );
}

export default ImageDetail;
