import Stat from "./Stat";

function Stats({
  cookingMinutes,
  preparationMinutes,
  readyInMinutes,
  servings,
  healthScore,
  calories,
  caloriesUnit,
}) {
  return (
    <div className="mx-auto grid grid-cols-3 gap-x-12 gap-y-5 lg:grid-cols-2">
      <Stat value={preparationMinutes ?? "-"} unit={"minutes"}>
        Preparation Time
      </Stat>
      <Stat value={cookingMinutes ?? "-"} unit={"minutes"}>
        Cooking Time
      </Stat>
      <Stat value={readyInMinutes ?? "-"} unit={"minutes"}>
        Ready Time
      </Stat>
      <Stat value={servings ?? "-"} unit={"person"}>
        Servings
      </Stat>
      <Stat value={healthScore ?? "-"} unit={"percent"}>
        Health Score
      </Stat>
      <Stat value={calories ?? "-"} unit={caloriesUnit || "----"}>
        Calories
      </Stat>
    </div>
  );
}

export default Stats;
