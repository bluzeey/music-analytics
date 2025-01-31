import { create } from 'zustand';
import { UserProfile, StreamingStats, SubscriptionDetails } from '@/types/profile';

interface ProfileStore {
  userProfile: UserProfile | null;
  streamingStats: StreamingStats | null;
  subscriptionDetails: SubscriptionDetails | null;
  isLoading: boolean;
  error: string | null;
  fetchProfileData: (userId: string) => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  userProfile: null,
  streamingStats: null,
  subscriptionDetails: null,
  isLoading: false,
  error: null,

  fetchProfileData: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      // Mock data for now - replace with actual API calls
      const mockProfile: UserProfile = {
        id: userId,
        username: "JohnDoe",
        email: "john@example.com",
        profilePicture: "/placeholder.svg",
        memberSince: new Date("2023-01-01"),
        subscriptionTier: "Premium"
      };

      const mockStats: StreamingStats = {
        totalStreams: 1234,
        uniqueArtistsListened: 89,
        topGenres: [
          { genre: "Pop", percentage: 45 },
          { genre: "Rock", percentage: 30 },
          { genre: "Jazz", percentage: 25 }
        ],
        listeningHabits: {
          mostActiveDay: "Sunday",
          averageStreamTime: 120
        }
      };

      const mockSubscription: SubscriptionDetails = {
        currentPlan: "Premium",
        nextBillingDate: new Date("2024-12-31"),
        paymentMethod: "Credit Card",
        canUpgrade: true,
        upgradeOptions: [
          {
            planName: "Artist",
            price: 14.99,
            features: ["Analytics Dashboard", "Artist Profile", "Direct Fan Messaging"]
          }
        ]
      };

      set({
        userProfile: mockProfile,
        streamingStats: mockStats,
        subscriptionDetails: mockSubscription,
        isLoading: false
      });
    } catch (error) {
      set({ error: "Failed to fetch profile data", isLoading: false });
    }
  },

  updateProfile: async (updates: Partial<UserProfile>) => {
    set({ isLoading: true, error: null });
    try {
      // Mock update - replace with actual API call
      set(state => ({
        userProfile: state.userProfile ? { ...state.userProfile, ...updates } : null,
        isLoading: false
      }));
    } catch (error) {
      set({ error: "Failed to update profile", isLoading: false });
    }
  }
}));