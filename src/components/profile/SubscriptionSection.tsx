import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProfileStore } from "@/store/profileStore";

export function SubscriptionSection() {
  const { subscriptionDetails } = useProfileStore();

  if (!subscriptionDetails) return null;

  return (
    <Card className="w-full bg-dashboard-card text-white">
      <CardHeader>
        <CardTitle>Subscription Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg bg-dashboard-dark p-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-400">Current Plan</p>
            <p className="text-2xl font-bold">{subscriptionDetails.currentPlan}</p>
            <p className="text-sm text-gray-400">
              Next billing date: {new Date(subscriptionDetails.nextBillingDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-400">
              Payment method: {subscriptionDetails.paymentMethod}
            </p>
          </div>
        </div>

        {subscriptionDetails.canUpgrade && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Available Upgrades</h3>
            {subscriptionDetails.upgradeOptions.map((option) => (
              <div
                key={option.planName}
                className="rounded-lg border border-gray-700 p-4 transition-colors hover:border-dashboard-primary"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{option.planName}</p>
                    <p className="text-sm text-gray-400">${option.price}/month</p>
                  </div>
                  <button className="rounded bg-dashboard-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-opacity-90">
                    Upgrade
                  </button>
                </div>
                <ul className="mt-2 space-y-1">
                  {option.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-400">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}