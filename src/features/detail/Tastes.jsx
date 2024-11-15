import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = {
  Sweetness: "#6B9080",
  Saltiness: "#E76F51",
  Sourness: "#f08e3f",
  Bitterness: "#9D9C62",
  Savoriness: "#6aa8e2",
  Fattiness: "#dbb81d",
};

function Tastes({ tastes }) {
  const data = [
    { name: "Sweetness", value: tastes?.sweetness },
    { name: "Saltiness", value: tastes?.saltiness },
    { name: "Sourness", value: tastes?.sourness },
    { name: "Bitterness", value: tastes?.bitterness },
    { name: "Savoriness", value: tastes?.savoriness },
    { name: "Fattiness", value: tastes?.fattiness },
  ].filter((taste) => taste.value > 0);

  return (
    <div>
      <h3 className="mb-5 text-center text-3xl font-semibold text-darkGreen">
        Tastes
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            outerRadius={80}
            className="focus:outline-none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Tastes;
