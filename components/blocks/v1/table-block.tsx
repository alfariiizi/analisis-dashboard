"use client";

import { TableBlock } from "@/@types/analysis-blocks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

type Props = TableBlock;

export default function TableBlockComponent({ title, columns, data }: Props) {
  return (
    <div className="my-6">
      {title && <h4 className="mb-3 text-base font-semibold">{title}</h4>}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className="whitespace-nowrap"
                    style={{
                      textAlign: col.align || "left",
                      width: col.width
                    }}
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, idx) => (
                <TableRow key={idx}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      style={{ textAlign: col.align || "left" }}
                      className="whitespace-nowrap"
                    >
                      {formatCellValue(row[col.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

function formatCellValue(value: any): string {
  if (value === null || value === undefined) return "-";
  if (typeof value === "number") {
    // Format numbers with thousand separators
    return value.toLocaleString("id-ID");
  }
  return String(value);
}
