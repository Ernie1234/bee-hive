"use client";

import { useRouter } from "next/navigation";

import { TableCell, TableRow } from "../components/ui/table";
import { IEntrepreneur } from "@/lib/data";

interface Props {
  index: number;
  item: IEntrepreneur;
}

export default function Row({ index, item }: Props) {
  const router = useRouter();
  return (
    <TableRow
      className="hover:cursor-pointer"
      onClick={() => router.push(`/auth/admin/entre/${item.id}`)}
    >
      <TableCell>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="font-medium text-center bg-blue-200/5 rounded-full min-w-max p-2">
            # {index + 1}
          </div>
        </div>
      </TableCell>
      <TableCell>{item.fullName}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.businessName}</TableCell>
      <TableCell>{item.businessDesc}</TableCell>
      <TableCell>{item.stage}</TableCell>
      <TableCell>{item.phone}</TableCell>
      <TableCell>{item.experience}</TableCell>
    </TableRow>
  );
}
