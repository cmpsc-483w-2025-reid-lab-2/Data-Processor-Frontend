import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HeartRateScoreCorrelationChart = () => {
  // Mock data - in a real application this would come from processing the CSV files
  const data = [
    { heartRate: "100-110", score: 72.1 },
    { heartRate: "110-120", score: 75.8 },
    { heartRate: "120-130", score: 84.2 },
    { heartRate: "130-140", score: 86.5 },
    { heartRate: "140-150", score: 78.9 },
    { heartRate: "150-160", score: 73.4 },
    { heartRate: "160+", score: 68.2 },
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
          <XAxis
            dataKey="heartRate"
            label={{
              value: "Heart Rate (BPM)",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            domain={[60, 100]}
            label={{
              value: "Average Score",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip formatter={(value) => [`${value}`, "Average Score"]} />
          <Bar dataKey="score" fill="#364976" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeartRateScoreCorrelationChart;
