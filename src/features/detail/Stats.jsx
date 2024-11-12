import Stat from "./Stat";

function Stats() {
  return (
    <div className="mx-auto grid grid-cols-3 gap-x-12 gap-y-5">
      <Stat value={10} unit={"minutes"}>
        Preparation Time
      </Stat>
      <Stat value={35} unit={"minutes"}>
        Cooking Time
      </Stat>
      <Stat value={45} unit={"minutes"}>
        Ready Time
      </Stat>
      <Stat value={10} unit={"person"}>
        Servings
      </Stat>
      <Stat value={100} unit={"percent"}>
        Health Score
      </Stat>
      <Stat value={137.6} unit={"kcal"}>
        Calories
      </Stat>
    </div>
  );
}

export default Stats;
