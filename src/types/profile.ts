export interface UserProfile {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  memberSince: Date;
  subscriptionTier: 'Free' | 'Premium' | 'Artist';
}

export interface StreamingStats {
  totalStreams: number;
  uniqueArtistsListened: number;
  topGenres: Array<{
    genre: string;
    percentage: number;
  }>;
  listeningHabits: {
    mostActiveDay: string;
    averageStreamTime: number;
  };
}

export interface SubscriptionDetails {
  currentPlan: string;
  nextBillingDate: Date;
  paymentMethod: string;
  canUpgrade: boolean;
  upgradeOptions: Array<{
    planName: string;
    price: number;
    features: string[];
  }>;
}