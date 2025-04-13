import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const DayOfWeekPerformanceChart = () => {
  // Mock data - in a real application this would come from processing the CSV files
  const data = [
    { day: "Mon", score: 72.4 },
    { day: "Tue", score: 78.1 },
    { day: "Wed", score: 85.3 },
    { day: "Thu", score: 83.7 },
    { day: "Fri", score: 79.2 },
    { day: "Sat", score: 76.8 },
    { day: "Sun", score: 74.5 },
  ];
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            domain={[60, 100]}
            label={{
              value: "Average Score",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip formatter={(value) => [`${value}`, "Average Score"]} />
          <Bar dataKey="score" fill="#5674b0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default DayOfWeekPerformanceChart;
