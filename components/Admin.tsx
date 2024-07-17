"use client";

import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";
import { IEntrepreneur, TCoaches, TYPE } from "@/lib/data";
import Row from "./Row";

interface ICoach {
  coaches: TCoaches[];
  entre: IEntrepreneur[];
}

export default function Admin({ coaches, entre }: ICoach) {
  const [tableType, setTableType] = useState(TYPE.ENTREPRENEUR);
  return (
    <div className="py-8">
      <div className="">
        <h1 className="text-4xl text-center">Admin Dashboard</h1>
        <div className="flex gap-6 justify-center mt-4">
          <div
            className={cn(
              tableType === TYPE.ENTREPRENEUR
                ? "bg-muted-foreground/10"
                : "bg-none",
              "px-8 py-2 rounded-full cursor-pointer"
            )}
            onClick={() => setTableType(TYPE.ENTREPRENEUR)}
          >
            Entrepreneur
          </div>
          <div
            className={cn(
              tableType === TYPE.COACH ? "bg-muted-foreground/10" : "bg-none",
              "px-8 py-2 rounded-full cursor-pointer"
            )}
            onClick={() => setTableType(TYPE.COACH)}
          >
            Coach
          </div>
        </div>
      </div>
      {tableType === TYPE.ENTREPRENEUR && (
        <div className="mt-8 border-y border-muted-foreground">
          <Table>
            {/* <TableCaption>A list of your recent commodity.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">S/N</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Business Name</TableHead>
                <TableHead>Business Description</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Experience</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="px-8">
              {entre.map((item, index) => {
                return <Row key={item.id} index={index} item={item} />;
              })}
            </TableBody>
          </Table>
        </div>
      )}
      {tableType === TYPE.COACH && (
        <div className="mt-8 border-y border-muted-foreground">
          <Table>
            {/* <TableCaption>A list of your recent commodity.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-center">S/N</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Interest</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Url</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Area of Expertise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="px-8">
              {coaches.map((item, index) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="flex flex-col justify-center items-center w-full h-full">
                        <div className="font-medium text-center bg-blue-200/5 rounded-full min-w-max p-2">
                          # {index + 1}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.interest}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.url}</TableCell>
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
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
