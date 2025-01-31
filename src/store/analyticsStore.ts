import { create } from "zustand";

interface AdvancedMetrics {
  totalRevenue: number;
  userAcquisitionRate: number;
  churnRate: number;
  averageRevenuePerUser: number;
  streamConversionRate: number;
}

interface UserBehaviorMetrics {
  activeUserSegments: Array<{
    segment: string;
    percentage: number;
    averageStreamTime: number;
  }>;
  userRetentionCohorts: Array<{
    cohort: string;
    retentionRate: number;
  }>;
}

interface AnalyticsState {
  timeRange: 'last7Days' | 'last30Days' | 'last90Days' | 'custom';
  metrics: AdvancedMetrics | null;
  userBehavior: UserBehaviorMetrics | null;
  isLoading: boolean;
  error: string | null;
  fetchAnalytics: (timeRange: string) => Promise<void>;
}

export const useAnalyticsStore = create<AnalyticsState>((set) => ({
  timeRange: 'last30Days',
  metrics: null,
  userBehavior: null,
  isLoading: false,
  error: null,
  fetchAnalytics: async (timeRange) => {
    set({ isLoading: true, error: null });
    try {
      // Mock data fetch - replace with actual API call
      const mockData = {
        metrics: {
          totalRevenue: 125000,
          userAcquisitionRate: 15.7,
          churnRate: 4.2,
          averageRevenuePerUser: 12.5,
          streamConversionRate: 68.3,
        },
        userBehavior: {
          activeUserSegments: [
            { segment: "Daily", percentage: 45, averageStreamTime: 120 },
            { segment: "Weekly", percentage: 30, averageStreamTime: 60 },
            { segment: "Monthly", percentage: 25, averageStreamTime: 30 },
          ],
          userRetentionCohorts: [
            { cohort: "Jan 2024", retentionRate: 85 },
            { cohort: "Feb 2024", retentionRate: 78 },
            { cohort: "Mar 2024", retentionRate: 82 },
          ],
        },
      };

      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      set({ 
        metrics: mockData.metrics,
        userBehavior: mockData.userBehavior,
        timeRange: timeRange as AnalyticsState['timeRange'],
        isLoading: false 
      });
    } catch (error) {
      set({ error: 'Failed to fetch analytics data', isLoading: false });
    }
  },
}));