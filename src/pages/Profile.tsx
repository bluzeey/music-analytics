import { useEffect } from "react";
import { useProfileStore } from "@/store/profileStore";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { StreamingInsights } from "@/components/profile/StreamingInsights";
import { SubscriptionSection } from "@/components/profile/SubscriptionSection";

export default function Profile() {
  const { fetchProfileData } = useProfileStore();

  useEffect(() => {
    fetchProfileData("user-1"); // Replace with actual user ID from auth
  }, [fetchProfileData]);

  return (
    <div className="container mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold text-white">Your Profile</h1>
      <div className="grid gap-6">
        <ProfileHeader />
        <StreamingInsights />
        <SubscriptionSection />
      </div>
    </div>
  );
}