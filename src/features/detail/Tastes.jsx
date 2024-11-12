import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function Tastes() {
  const data = [
    { name: "Sweetness", value: 59.68 },
    { name: "Saltiness", value: 100 },
    { name: "Sourness", value: 50.55 },
    { name: "Bitterness", value: 36.87 },
    { name: "Savoriness", value: 52.31 },
    { name: "Fattiness", value: 79.53 },
    { name: "Spiciness", value: 0 },
  ];

  const COLORS = {
    Sweetness: "#97b393",
    Saltiness: "#b6c9b5",
    Sourness: "#b1c2ac",
    Bitterness: "#a7b3ac",
    Savoriness: "#91a19d",
    Fattiness: "#818e92",
    Spiciness: "#76877D",
  };

  return (
    <div>
      <h3 className="mb-5 text-center text-3xl font-semibold text-darkGreen">
        Tastes
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            outerRadius={80}
            label={({ name, value }) => `${name}: ${value.toFixed(2)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Tastes;
