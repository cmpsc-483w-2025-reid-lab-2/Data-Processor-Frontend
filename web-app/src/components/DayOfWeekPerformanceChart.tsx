import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DayOfWeekPerformanceChartProps{
    data: {
        day: string;
        score: number;
    }[];
}


const DayOfWeekPerformanceChart = ({data}: DayOfWeekPerformanceChartProps) => {

  return (
     <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[60, 100]} />
          <Tooltip formatter={(value) => [`${value}`, "Average Score"]} />
          <Bar dataKey="score" fill="#5674b0" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default DayOfWeekPerformanceChart;
