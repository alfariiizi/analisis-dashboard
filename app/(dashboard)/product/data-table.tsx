"use client";

import * as React from "react";
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
  useReactTable
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  PlusCircle,
  Star,
  MapPin,
  TrendingUp
} from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { ShopeeImage, TokopediaImage, BlibliImage, TikTokShopImage } from "@/assets/image";

export type Product = {
  id: string;
  product_name: string;
  image: string;
  marketplace: "tokopedia" | "shopee" | "tiktok" | "blibli";
  marketplace_url: string;
  price: number;
  original_price: number;
  rating: number;
  sold: number;
  stock: number;
  category: string;
  condition: string;
  shop: Shop;
  discount: number;
  shipping: string;
};

export type Shop = {
  name: string;
  location: string;
  rating: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
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
    enableHiding: false
  },
  {
    accessorKey: "product_name",
    header: "Nama Produk",
    cell: ({ row }) => {
      const marketplaceLogos = {
        tokopedia: TokopediaImage,
        shopee: ShopeeImage,
        tiktok: TikTokShopImage,
        blibli: BlibliImage
      };

      return (
        <div className="flex items-center gap-4">
          <Image
            src={row.original.image}
            className="rounded-lg border"
            width={60}
            height={60}
            alt=""
            unoptimized
          />
          <div className="space-y-1">
            <div className="font-medium">{row.getValue("product_name")}</div>
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <div className="flex aspect-square items-center gap-2">
                <Image
                  src={marketplaceLogos[row.original.marketplace]}
                  alt={row.original.marketplace}
                  width={60}
                  height={20}
                  className="size-8 object-contain"
                />
              </div>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                {row.original.rating}
              </span>
              <span className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Terjual {row.original.sold.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Harga
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = row.original.price;
      const originalPrice = row.original.original_price;
      const discount = row.original.discount;

      return (
        <div className="space-y-1">
          <div className="font-semibold">Rp{price.toLocaleString("id-ID")}</div>
          {discount > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-xs line-through">
                Rp{originalPrice.toLocaleString("id-ID")}
              </span>
              <Badge variant="destructive" className="text-xs">
                -{discount}%
              </Badge>
            </div>
          )}
        </div>
      );
    }
  },
  {
    accessorKey: "shop",
    header: "Toko",
    cell: ({ row }) => {
      const shop = row.original.shop;

      return (
        <div className="space-y-1">
          <div className="font-medium">{shop.name}</div>
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <MapPin className="h-3 w-3" />
            {shop.location}
          </div>
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            {shop.rating}
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stok
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const stock = row.original.stock;
      const variant = stock < 50 ? "warning" : stock < 100 ? "secondary" : "success";

      return <Badge variant={variant}>{stock.toLocaleString("id-ID")} unit</Badge>;
    }
  },
  {
    accessorKey: "category",
    header: "Kategori",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")?.toString().replace(/-/g, " ")}</div>
    )
  },
  {
    accessorKey: "shipping",
    header: "Pengiriman",
    cell: ({ row }) => (
      <Badge variant="success" className="whitespace-nowrap">
        {row.getValue("shipping")}
      </Badge>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Buka menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/product/${row.original.id}`} className="w-full">
                Lihat Detail
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Analisis Produk</DropdownMenuItem>
            <DropdownMenuItem>Tambah ke Watchlist</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];

export default function ProductsDataTable({ data }: { data: Product[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
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
      rowSelection
    }
  });

  const stockStatuses = [
    {
      value: "high",
      label: "Stok Banyak (>100)"
    },
    {
      value: "medium",
      label: "Stok Sedang (50-100)"
    },
    {
      value: "low",
      label: "Stok Sedikit (<50)"
    }
  ];

  const categories = [
    {
      value: "fashion",
      label: "Fashion"
    },
    {
      value: "elektronik",
      label: "Elektronik"
    },
    {
      value: "kecantikan",
      label: "Kecantikan"
    },
    {
      value: "makanan-minuman",
      label: "Makanan & Minuman"
    },
    {
      value: "alat-tulis",
      label: "Alat Tulis"
    }
  ];

  return (
    <div className="w-full">
      <div className="items-center gap-4 pb-4 lg:flex">
        <div className="flex flex-col gap-2 lg:flex-row">
          <Input
            placeholder="Cari produk..."
            value={(table.getColumn("product_name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("product_name")?.setFilterValue(event.target.value)
            }
            className="lg:max-w-sm"
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <PlusCircle className="me-2 h-4 w-4" />
                Stok
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-0">
              <Command>
                <CommandInput placeholder="Filter stok" className="h-9" />
                <CommandList>
                  <CommandEmpty>Tidak ada stok ditemukan.</CommandEmpty>
                  <CommandGroup>
                    {stockStatuses.map((status) => (
                      <CommandItem key={status.value} value={status.value}>
                        <div className="flex items-center space-x-3 py-1">
                          <Checkbox id={status.value} />
                          <label
                            htmlFor={status.value}
                            className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {status.label}
                          </label>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <PlusCircle className="me-2 h-4 w-4" />
                Kategori
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-0">
              <Command>
                <CommandInput placeholder="Cari kategori" className="h-9" />
                <CommandList>
                  <CommandEmpty>Tidak ada kategori ditemukan.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem key={category.value} value={category.value}>
                        <div className="flex items-center space-x-3 py-1">
                          <Checkbox id={category.value} />
                          <label
                            htmlFor={category.value}
                            className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category.label}
                          </label>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Kolom <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Tidak ada produk ditemukan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 pt-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} dari{" "}
          {table.getFilteredRowModel().rows.length} produk dipilih.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Sebelumnya
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}
