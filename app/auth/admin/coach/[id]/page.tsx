import { getCoachById } from "@/actions/admin";
import EmailBtn from "@/components/EmailBtn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;

  const coach = await getCoachById(id);

  if (coach === null) {
    return <div className="mt-16 mx-auto text-xl">No Coach yet!</div>;
  }

  return (
    <div className="py-8">
      <div className="">
        <h1 className="text-4xl text-center">Admin Dashboard</h1>
        <div className="flex gap-6 justify-center mt-4">
          <div
            className={cn(
              "bg-muted-foreground/10 bg-none px-8 py-2 rounded-full mb-8"
            )}
          >
            Details
          </div>
        </div>
      </div>
      <Table className="max-w-screen-xl mx-auto border rounded-lg">
        {/* <TableCaption>A list of your recent commodity.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Question</TableHead>
            <TableHead>Response</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="px-8">
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>{coach.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email Address</TableCell>
            <TableCell>{coach.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>{coach.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Interest</TableCell>
            <TableCell>{coach.interest}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Expertise</TableCell>
            <TableCell>
              {coach.expertise.map((exp) => {
                const result = exp.replace(/_/g, " ");
                return (
                  <p className="" key={exp}>
                    {result}
                  </p>
                );
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Web link/Url</TableCell>
            <TableCell>{coach.url}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <EmailBtn userEmail={coach.email} />
    </div>
  );
}
