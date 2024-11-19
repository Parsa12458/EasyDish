function NutritionTable({ nutrition }) {
  return (
    <div className="overflow-x-visible">
      <h3 className="xs:text-lg xs:mb-0 mb-4 text-center text-xl font-bold">
        Nutrition Facts
      </h3>
      <table className="xs:text-xs table">
        <thead>
          <tr>
            <th className="text-center">Row</th>
            <th className="text-center">Name</th>
            <th className="text-center">Amount</th>
            <th className="max-w-20 whitespace-normal text-center">
              Percent of daily needs
            </th>
          </tr>
        </thead>
        <tbody>
          {nutrition?.map((nutrient, i) => (
            <tr key={i}>
              <th className="text-center">{i + 1}</th>
              <td className="text-center">{nutrient.name}</td>
              <td className="text-center">
                {nutrient.amount}
                {nutrient.unit}
              </td>
              <td className="text-center">{nutrient.percentOfDailyNeeds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NutritionTable;
