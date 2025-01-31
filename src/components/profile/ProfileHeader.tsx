import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProfileStore } from "@/store/profileStore";

export function ProfileHeader() {
  const { userProfile } = useProfileStore();

  if (!userProfile) return null;

  return (
    <Card className="w-full bg-dashboard-card text-white">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={userProfile.profilePicture} alt={userProfile.username} />
          <AvatarFallback>{userProfile.username[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{userProfile.username}</h2>
          <p className="text-gray-400">{userProfile.email}</p>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-dashboard-primary px-3 py-1 text-sm">
              {userProfile.subscriptionTier}
            </span>
            <span className="text-sm text-gray-400">
              Member since {new Date(userProfile.memberSince).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}