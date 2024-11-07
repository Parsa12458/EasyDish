import { convertMinutesToHours } from "../../helpers/helper";

function Card({ data }) {
  const { title, image, readyInMinutes, servings, healthScore } = data;

  return (
    <div className="w-[312px] cursor-pointer overflow-hidden rounded-default bg-lightMint drop-shadow-md transition-all duration-300 hover:scale-105 hover:drop-shadow-xl">
      <img src={image} alt={title} className="h-[231px] w-full" />
      <div className="mb-10 mt-7 px-7">
        <h3 className="text-xl font-bold leading-5 text-forestGreen">
          {title}
        </h3>
        <div className="mt-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-start gap-1">
            <img
              src="/icons/clock-icon.svg"
              alt="Clock icon"
              className="mr-1 h-5 w-5"
            />
            <span className="font-semibold text-primary">Ready Time: </span>
            <span className="font-semibold text-darkGreen">
              {convertMinutesToHours(readyInMinutes)}
            </span>
          </div>
          <div className="flex items-center justify-start gap-1">
            <img
              src="/icons/serving-icon.svg"
              alt="Servings icon"
              className="mr-1 h-5 w-5"
            />
            <span className="font-semibold text-primary">Servings: </span>
            <span className="font-semibold text-darkGreen">
              {servings} person
            </span>
          </div>
          <div className="flex items-center justify-start gap-1">
            <img
              src="/icons/health-icon.svg"
              alt="Health icon"
              className="mr-1 h-5 w-5"
            />
            <span className="font-semibold text-primary">Health Score: </span>
            <span className="font-semibold text-darkGreen">{healthScore}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
