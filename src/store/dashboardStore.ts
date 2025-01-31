import { create } from 'zustand';
import { faker } from '@faker-js/faker';

export interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  monthlyRevenue: number;
  topArtist: {
    name: string;
    streams: number;
  };
}

export interface ChartData {
  userGrowth: Array<{
    month: string;
    totalUsers: number;
    activeUsers: number;
  }>;
  revenueDistribution: Array<{
    source: string;
    amount: number;
    percentage: number;
  }>;
}

interface DashboardStore {
  metrics: DashboardMetrics;
  chartData: ChartData;
  isLoading: boolean;
  generateMockData: () => void;
}

const generateMockData = (): { metrics: DashboardMetrics; chartData: ChartData } => {
  const metrics: DashboardMetrics = {
    totalUsers: Math.floor(Math.random() * 1000000),
    activeUsers: Math.floor(Math.random() * 500000),
    totalStreams: Math.floor(Math.random() * 10000000),
    monthlyRevenue: Math.floor(Math.random() * 1000000),
    topArtist: {
      name: faker.person.fullName(),
      streams: Math.floor(Math.random() * 1000000),
    },
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const userGrowth = months.map((month) => ({
    month,
    totalUsers: Math.floor(Math.random() * 1000000),
    activeUsers: Math.floor(Math.random() * 500000),
  }));

  const sources = ['Premium', 'Ads', 'Licensing', 'Other'];
  const revenueDistribution = sources.map((source) => {
    const amount = Math.floor(Math.random() * 500000);
    return {
      source,
      amount,
      percentage: Math.floor(Math.random() * 100),
    };
  });

  return {
    metrics,
    chartData: {
      userGrowth,
      revenueDistribution,
    },
  };
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  metrics: {
    totalUsers: 0,
    activeUsers: 0,
    totalStreams: 0,
    monthlyRevenue: 0,
    topArtist: {
      name: '',
      streams: 0,
    },
  },
  chartData: {
    userGrowth: [],
    revenueDistribution: [],
  },
  isLoading: false,
  generateMockData: () => {
    set({ isLoading: true });
    const mockData = generateMockData();
    setTimeout(() => {
      set({ ...mockData, isLoading: false });
    }, 1000);
  },
}));