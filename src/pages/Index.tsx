import { useEffect } from "react";
import { Users, Activity, DollarSign, Music, Trophy } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { UserGrowthChart } from "@/components/dashboard/UserGrowthChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { useDashboardStore } from "@/store/dashboardStore";

const Index = () => {
  const { metrics, chartData, generateMockData, isLoading } = useDashboardStore();

  useEffect(() => {
    generateMockData();
  }, [generateMockData]);

  return (
    <div className="min-h-screen bg-dashboard-dark p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Streamify Analytics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value={metrics.totalUsers}
            icon={<Users className="w-6 h-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Active Users"
            value={metrics.activeUsers}
            icon={<Activity className="w-6 h-6" />}
            trend={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Total Streams"
            value={metrics.totalStreams}
            icon={<Music className="w-6 h-6" />}
            trend={{ value: 15, isPositive: true }}
          />
          <MetricCard
            title="Monthly Revenue"
            value={`$${metrics.monthlyRevenue.toLocaleString()}`}
            icon={<DollarSign className="w-6 h-6" />}
            trend={{ value: 5, isPositive: true }}
          />
          <MetricCard
            title="Top Artist"
            value={metrics.topArtist.name}
            icon={<Trophy className="w-6 h-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UserGrowthChart data={chartData.userGrowth} />
          <RevenueChart data={chartData.revenueDistribution} />
        </div>
      </div>
    </div>
  );
};

export default Index;