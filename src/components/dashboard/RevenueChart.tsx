import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface RevenueChartProps {
  data: Array<{
    source: string;
    amount: number;
    percentage: number;
  }>;
}

const COLORS = ["#6366F1", "#60A5FA", "#818CF8", "#93C5FD"];

export const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <Card className="p-6 bg-dashboard-card h-[400px]">
      <h3 className="text-lg font-semibold text-white mb-4">
        Revenue Distribution
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="amount"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "none",
              borderRadius: "0.5rem",
              color: "#fff",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};