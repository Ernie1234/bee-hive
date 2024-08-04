"use client";

import { TLaunch } from "@/lib/data";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";
import LaunchRow from "./LaunchRow";

interface Props {
  launch: TLaunch[];
}
export default function LaunchAdmin({ launch }: Props) {
  console.log(launch);
  return (
    <div className="py-8">
      <h1 className="text-4xl text-center">Admin Dashboard</h1>
      <div className="my-8 border-y border-muted-foreground">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">S/N</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Business Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Resident in Akure?</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="px-8">
            {launch.map((item, index) => {
              return <LaunchRow key={item.id} index={index} item={item} />;
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
