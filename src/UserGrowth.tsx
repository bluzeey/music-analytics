/* eslint-disable @typescript-eslint/no-unused-vars */

// import { cx } from "../src/lib/utils";

import { LineChart } from "./components/LineChart";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeaderCell,
//   TableRoot,
//   TableRow,
// } from "../src/components/Table";
import { Card } from "./components/Card";

const data = [
  {
    date: "Jan 23",
    "Total Users": 100500,
    Sponsored: 0,
    "Active Users": 50250,
  },
  {
    date: "Feb 23",
    "Total Users": 102500,
    Sponsored: 0,
    "Active Users": 80399,
  },
  {
    date: "Mar 23",
    "Total Users": 200500,
    Sponsored: 0,
    "Active Users": 136639,
  },
  {
    date: "Apr 23",
    "Total Users": 254500,
    Sponsored: 0,
    "Active Users": 232732,
  },
  {
    date: "May 23",
    "Total Users": 400000,
    Sponsored: 0,
    "Active Users": 396680,
  },
  {
    date: "Jun 23",
    "Total Users": 550000,
    Sponsored: 0,
    "Active Users": 674089,
  },
  {
    date: "Jul 23",
    "Total Users": 900000,
    Sponsored: 0,
    "Active Users": 1145992,
  },
  {
    date: "Aug 23",
    "Total Users": 1000000,
    Sponsored: 0,
    "Active Users": 1954386,
  },
  {
    date: "Sep 23",
    "Total Users": 1933330,
    Sponsored: 120,
    "Active Users": 3327616,
  },
  {
    date: "Oct 23",
    "Total Users": 2433330,
    Sponsored: 0,
    "Active Users": 5662581,
  },
  {
    date: "Nov 23",
    "Total Users": 3033330,
    Sponsored: 0,
    "Active Users": 9601031,
  },
  {
    date: "Dec 23",
    "Total Users": 4000000,
    Sponsored: 0,
    "Active Users": 16341722,
  },
];

// const summary = [
//   {
//     name: "Total Users",
//     value: "$21,349.36",
//     invested: "$19,698.65",
//     cashflow: "$14,033.74",
//     gain: "+$11,012.39",
//     realized: "+$177.48",
//     dividends: "+$490.97",
//     bgColor: "bg-blue-500",
//     changeType: "positive",
//   },
//   {
//     name: "Active Users",
//     value: "$25,943.43",
//     invested: "$23,698.65",
//     cashflow: "$11,033.74",
//     gain: "+$3,012.39",
//     realized: "+$565.41",
//     dividends: "+$290.97",
//     bgColor: "bg-violet-500",
//     changeType: "positive",
//   },
// ];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

export default function UserGrowth() {
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow h-fit col-span-4">
      {" "}
      <Card className="">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          User Growth
        </h3>
        <p className="mt-1 text-xl font-semibold text-gray-600 dark:text-gray-50">
          100,332,333
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +500,000 (33.1%)
          </span>{" "}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            Past 12 months
          </span>
        </p>
        <LineChart
          data={data}
          index="date"
          categories={["Total Users", "Active Users"]}
          colors={["blue", "violet", "fuchsia"]}
          valueFormatter={valueFormatter}
          yAxisWidth={60}
          onValueChange={() => {}}
          className="mt-6 hidden h-96 sm:block"
        />
        <LineChart
          data={data}
          index="date"
          categories={["Total Users", "Active Users"]}
          colors={["blue", "violet", "fuchsia"]}
          valueFormatter={valueFormatter}
          showYAxis={false}
          showLegend={false}
          startEndOnly={true}
          className="mt-6 h-72 sm:hidden"
        />
        {/* <TableRoot className="mt-8">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell className="text-right">Value</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Invested
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Cashflow
                </TableHeaderCell>
                <TableHeaderCell className="text-right">Gain</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Realized
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Dividends
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900 dark:text-gray-50">
                    <div className="flex space-x-3">
                      <span
                        className={cx(item.bgColor, "w-1 shrink-0 rounded")}
                        aria-hidden={true}
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.invested}</TableCell>
                  <TableCell className="text-right">{item.cashflow}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500"
                      )}
                    >
                      {item.gain}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500"
                      )}
                    >
                      {item.realized}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500"
                      )}
                    >
                      {item.dividends}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot> */}
      </Card>
    </section>
  );
}
