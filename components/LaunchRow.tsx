"use client";

import { useRouter } from "next/navigation";

import { TableCell, TableRow } from "./ui/table";

import { TLaunch } from "@/lib/data";

interface Props {
  index: number;
  item: TLaunch;
}

export default function LaunchRow({ index, item }: Props) {
  const router = useRouter();
  return (
    <TableRow
      className="hover:cursor-pointer"
      onClick={() => router.push(`/auth/admin/launch/${item.id}`)}
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
      <TableCell>{item.phone}</TableCell>
      <TableCell>{item.businessResidence}</TableCell>
    </TableRow>
  );
}
