import { useEffect, useState } from "react";
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

  const [height, setHeight] = useState(220);
  const [outerRadius, setOuterRadius] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setHeight(200);
        setOuterRadius(65);
      } else {
        setHeight(220);
        setOuterRadius(80);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:w-full">
      <h3 className="mb-5 text-center text-3xl font-semibold text-darkGreen sm:mb-0 sm:text-2xl dark:text-primaryDark">
        Tastes
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            outerRadius={outerRadius}
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
