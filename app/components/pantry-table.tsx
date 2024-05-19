import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PantryTable() {
  return (
    <Table>
      <TableCaption>A list of your items in your pantry.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-m-[200px]">Item</TableHead>
          <TableHead className="text-right">Qty</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead>Expiry</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-left font-medium">Kadala</TableCell>
          <TableCell className="text-right">2</TableCell>
          <TableCell className="text-right">85</TableCell>
          <TableCell className="text-left">25/12/2022</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
