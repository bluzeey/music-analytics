/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Input } from "./components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Card } from "./components/ui/card";
import { useToast } from "./hooks/use-toast";

const data: Stream[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "honeysingh@artist.com",
    songName: "Millionaire",
    artist: "Yo Yo Honey Singh",
    dateStreamed: "07-09-2024",
    streamCount: 550000,
    albumCover:
      "https://images.genius.com/5ec85acd8642096857b86ed76f43fb82.1000x1000x1.png",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "postmalone@artist.com",
    songName: "I Had Some Help",
    artist: "Post Malone",
    dateStreamed: "07-09-2024",
    streamCount: 450000,
    albumCover:
      "https://images.genius.com/47f7c3382c5b12a2874cdaa591ba1316.1000x1000x1.png",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "sabrinacarpenter@artist.com",
    songName: "Espresso",
    artist: "Sabrina Carpenter",
    dateStreamed: "07-09-2024",
    streamCount: 440000,
    albumCover:
      "https://images.genius.com/61dab7bb1303ea2419aa2584308f134a.300x300x1.png",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "kendricklamar@artist.com",
    songName: "Not Like Us",
    artist: "Kendrick Lamar",
    dateStreamed: "07-09-2024",
    streamCount: 340000,
    albumCover:
      "https://images.genius.com/95cfea0187b37c7731e11d54b07d2415.1000x1000x1.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "charlieputh@artist.com",
    songName: "We don't talk anymore",
    artist: "Charlie Puth",
    dateStreamed: "07-09-2024",
    streamCount: 220000,
    albumCover:
      "https://images.genius.com/78c11a302d3f4f082c2bbd407cd714f9.873x873x1.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "drake@artist.com",
    songName: "Started from the bottom - E.",
    artist: "Drake",
    dateStreamed: "07-09-2024",
    streamCount: 210000,
    albumCover:
      "https://images.genius.com/4d2f4a3e57d8c8016f8e655a718e3b59.1000x1000x1.png",
  },
];

export type Stream = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  songName: string;
  artist?: string;
  dateStreamed?: string;
  streamCount: number;
  albumCover?: string;
};
// let copiedStreamId = false;

export function getColumns(
  toast: (options: { title: string; description?: string }) => void
): ColumnDef<Stream>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "songName",
      header: "Song",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("songName")}</div>
      ),
    },
    {
      accessorKey: "albumCover",
      header: "Album cover",
      cell: (info) => (
        <img
          src={info.getValue() as any}
          alt="product"
          width="50"
          height="50"
        />
      ),
    },
    {
      accessorKey: "artist",
      header: "Artist",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("artist")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            User ID
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "dateStreamed",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Streamed
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-center font-medium">
          {row.getValue("dateStreamed")}
        </div>
      ),
      enableSorting: true,
    },
    {
      accessorKey: "streamCount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stream Count
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <div className="text-center font-medium">
          {row.getValue("streamCount")}
        </div>
      ),
      enableSorting: true,
    },

    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(payment.id);
                  toast({
                    title: "Stream ID Copied",
                    description:
                      "The Stream ID has been copied to your clipboard.",
                  });
                }}
              >
                Copy stream ID
                <span className="sr-only">Copy</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View stream details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
}

export function RecentStreams() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchTerm, setSearchTerm] = React.useState("");
  const { toast } = useToast();

  // Filtered data based on search term
  const filteredData = React.useMemo(() => {
    return data.filter((row) => {
      const songName = row.songName?.toLowerCase() || "";
      const artist = row.artist?.toLowerCase() || "";
      return (
        songName.includes(searchTerm.toLowerCase()) ||
        artist.includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  const table = useReactTable({
    data: filteredData,
    columns: getColumns(toast),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Card className="h-fit col-span-4 p-6  overflow-scroll">
      <h3 className="font-semibold text-gray-900 dark:text-gray-50">
        Recent Streams
      </h3>
      <div className="flex items-center py-4 ">
        {/* Combined filter input */}
        <Input
          placeholder="Filter by artist or song name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="max-w-sm mr-8"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              View
              {/* <ChevronDownIcon className="ml-2 h-4 w-4" />*/}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 mr-2 h-4 w-4"
              >
                <path
                  d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="px-2 py-1.5 text-sm font-semibold">
              Toggle columns
            </div>
            <hr></hr>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={getColumns(toast).length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Page size options */}
      <div className="flex justify-end space-x-2 py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Rows per page: {table.getState().pagination.pageSize}
              <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 10, 20, 50].map((pageSize) => (
              <DropdownMenuItem
                key={pageSize}
                onSelect={() => table.setPageSize(pageSize)} // Handle page size change
                className={`capitalize ${
                  table.getState().pagination.pageSize === pageSize
                    ? "font-bold"
                    : ""
                }`}
              >
                {pageSize}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
}
