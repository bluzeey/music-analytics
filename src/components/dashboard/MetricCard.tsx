import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  icon,
  trend,
  className,
}: MetricCardProps) => {
  return (
    <Card className={cn("p-6 bg-dashboard-card", className)}>
      <div className="flex items-center justify-between">
        <div className="text-white/60">{icon}</div>
        {trend && (
          <div
            className={cn(
              "text-sm font-medium flex items-center gap-1",
              trend.isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {trend.isPositive ? "↑" : "↓"}
            {trend.value}%
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-white/60">{title}</h3>
        <p className="text-2xl font-bold text-white mt-1 animate-number-counter">
          {typeof value === "number"
            ? value.toLocaleString()
            : value}
        </p>
      </div>
    </Card>
  );
};