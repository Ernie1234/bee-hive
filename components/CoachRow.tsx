"use client";

import { useRouter } from "next/navigation";

import { TableCell, TableRow } from "../components/ui/table";
import { TCoaches } from "@/lib/data";

interface Props {
  index: number;
  item: TCoaches;
}

export default function CoachRow({ index, item }: Props) {
  const router = useRouter();

  return (
    <TableRow
      className="hover:cursor-pointer"
      onClick={() => router.push(`/auth/admin/coach/${item.id}`)}
    >
      <TableCell>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="font-medium text-center bg-blue-200/5 rounded-full min-w-max p-2">
            # {index + 1}
          </div>
        </div>
      </TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.email}</TableCell>
      {/* <TableCell>{item.interest}</TableCell> */}
      <TableCell>{item.phone}</TableCell>
      {/* <TableCell>{item.url}</TableCell> */}
      <TableCell>{item.role}</TableCell>
      <TableCell>
        <div className="flex flex-col">
          {item.expertise.map((exp) => {
            const result = exp.replace(/_/g, " ");
            return (
              <p className="" key={exp}>
                {result}
              </p>
            );
          })}
        </div>
      </TableCell>
    </TableRow>
  );
}
