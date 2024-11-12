import OutlineButton from "../../ui/OutlineButton";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import SaveButton from "./SaveButton";
import Stats from "./Stats";
import Tastes from "./Tastes";

function DetailMainContent() {
  return (
    <div className="mx-auto grid max-w-[1920px] grid-cols-2 gap-x-16 gap-y-12 px-24 pb-32 pt-16">
      <Ingredients />
      <Stats />
      <Instructions />
      <Tastes />

      <div className="col-span-2 mx-auto ml-8 flex items-center justify-start gap-4">
        <SaveButton />
        <OutlineButton
          iconSrc="/icons/usentils-icon.svg"
          iconAlt="usentils icon"
        >
          See Similar Recipes
        </OutlineButton>
        <OutlineButton iconSrc="/icons/info-icon.svg" iconAlt="info icon">
          See Nutrition Facts
        </OutlineButton>
      </div>
    </div>
  );
}

export default DetailMainContent;
