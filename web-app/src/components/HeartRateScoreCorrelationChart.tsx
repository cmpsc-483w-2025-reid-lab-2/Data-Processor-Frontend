import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface HeartRateScoreCorrelationChartProps {
    data: {
        heartRate: string;
        score: number;
    }[];
}

const HeartRateScoreCorrelationChart = ({data}: HeartRateScoreCorrelationChartProps) => {
  return (
     <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="heartRate" />
          <YAxis domain={[60, 100]} />
          <Tooltip formatter={(value) => [`${value}`, "Average Score"]} />
          <Bar dataKey="score" fill="#364976" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeartRateScoreCorrelationChart;
