/* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client';

import { BarChart } from "../src/components/BarChart";
import { Card } from "../src/components/Card";
import { Divider } from "../src/components/Divider";
// import { Label } from "../src/components/Label";
// import { Switch } from "../src/components/Switch";

const data = [
  {
    date: "Jan 23",
    "Song Name": "Hot line bling - Drake",
    Streams: 4444444,
  },
  {
    date: "Feb 23",
    "Song Name": "Millionaire - Honey Singh",
    Streams: 3344444,
  },
  {
    date: "Mar 23",
    "Song Name": "Under the Influence - Chris Brown, Drake",
    Streams: 2244444,
  },
  {
    date: "Apr 23",
    "Song Name": "Awara - Badshah",
    Streams: 1878787,
  },
  {
    date: "May 23",
    "Song Name": "Machayenge - Emiway Bantai",
    Streams: 900022,
  },
];

function valueFormatter(number: number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(0) + "M"; // Display in millions
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K"; // Display in thousands if needed
  }
  return number.toString(); // For numbers less than 1000
}

export default function TopStreamed() {
  // const [showComparison, setShowComparison] = React.useState(false);
  // setShowComparison(false);
  return (
    <div className="h-fit rounded-xl border bg-card text-card-foreground shadow col-span-4 lg:col-span-3">
      {/* sm:mx-auto sm:max-w-2xl */}
      <Card>
        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
          Top 5 Streamed Songs
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-500">Past 30 days</p>
        <BarChart
          data={data}
          index="Song Name"
          categories={["Streams"]}
          colors={["blue"]}
          valueFormatter={valueFormatter}
          yAxisWidth={50}
          className="mt-6 hidden h-60 sm:block"
        />
        <BarChart
          data={data}
          index="Song Name"
          // categories={showComparison ? ["Song Name"] : ["Streams"]}
          categories={["Streams"]}
          colors={["blue"]}
          valueFormatter={valueFormatter}
          showYAxis={false}
          className="mt-4 h-56 sm:hidden"
        />
        <Divider />
        {/* <div className="mb-2 flex items-center space-x-3">
          <Switch
            id="comparison"
            checked={showComparison}
            onCheckedChange={setShowComparison}
          />
          <Label htmlFor="comparison">Show same period last year</Label>
        </div> */}
      </Card>
    </div>
  );
}
