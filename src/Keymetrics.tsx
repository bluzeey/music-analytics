// 'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../src/components/ui/avatar";

import { cx } from "../src/lib/utils";

import { Card } from "../src/components/Card";

const data = [
  {
    name: "Total Users",
    stat: "100.3M",
    change: "+99.7%",
    changeType: "positive",
    cardType: "NoAvatar",
  },
  {
    name: "Active Users",
    stat: "16.3%",
    change: "+32.4K%",
    changeType: "positive",
    cardType: "NoAvatar",
  },
  {
    name: "Total streams",
    stat: "50B Hours",
    change: "-5.7%",
    changeType: "negative",
    cardType: "NoAvatar",
  },
  {
    name: "Revenue",
    stat: "80B $",
    change: "+33.7%",
    changeType: "positive",
    cardType: "NoAvatar",
  },
  {
    name: "Top Artist",
    stat: "Drake",
    // change: "+33.7%",
    // changeType: "positive",
    cardType: "Avatar",
  },
];

export default function Keymetrics() {
  return (
    <>
      <dl className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-6">
        {data.map((item) => (
          <Card
            key={item.name}
            className=" rounded-xl border bg-card text-card-foreground shadow w-full xl:max-w-80"
          >
            {item.cardType == "Avatar" ? (
              <div className="flex justify-between">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-2 flex items-baseline space-x-2.5">
                    <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                      {item.stat}
                    </span>
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500",
                        "text-sm font-medium"
                      )}
                    >
                      {item.change}
                    </span>
                  </dd>
                </div>
                <Avatar className="self-center">
                  <AvatarImage src="https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-2 flex items-baseline space-x-2.5">
                  <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {item.stat}
                  </span>
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20"
                        : "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
                      "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                    )}
                  >
                    {item.change}
                  </span>
                </dd>
              </div>
            )}
          </Card>
        ))}
      </dl>
    </>
  );
}
