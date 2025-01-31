import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProfileStore } from "@/store/profileStore";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

export function StreamingInsights() {
  const { streamingStats } = useProfileStore();

  if (!streamingStats) return null;

  const COLORS = ["#6366F1", "#60A5FA", "#34D399"];

  return (
    <Card className="w-full bg-dashboard-card text-white">
      <CardHeader>
        <CardTitle>Streaming Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-dashboard-dark p-4">
            <p className="text-sm text-gray-400">Total Streams</p>
            <p className="text-2xl font-bold">{streamingStats.totalStreams.toLocaleString()}</p>
          </div>
          <div className="rounded-lg bg-dashboard-dark p-4">
            <p className="text-sm text-gray-400">Unique Artists</p>
            <p className="text-2xl font-bold">{streamingStats.uniqueArtistsListened}</p>
          </div>
          <div className="rounded-lg bg-dashboard-dark p-4">
            <p className="text-sm text-gray-400">Most Active Day</p>
            <p className="text-2xl font-bold">{streamingStats.listeningHabits.mostActiveDay}</p>
          </div>
        </div>

        <div className="flex h-64 items-center justify-center">
          <ChartContainer
            className="h-full w-full"
            config={{
              genre: {
                theme: {
                  light: "#6366F1",
                  dark: "#60A5FA",
                },
              },
            }}
          >
            <PieChart>
              <Pie
                data={streamingStats.topGenres}
                dataKey="percentage"
                nameKey="genre"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {streamingStats.topGenres.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <ChartTooltip />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}